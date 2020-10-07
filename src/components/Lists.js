import React, { useState } from 'react'
import AddCard from './AddCard'
import Cards from './Cards'
import ListMenu from './ListMenu'
import './Lists.css'
import Axios from 'axios'

const Lists = ({list, card}) => {
    const [cards, setCards] = useState(card)
    const [showMenu, setShowMenu] = useState(false)
    const [editableListTitle, setEditableListTitle] = useState(list.title)
    const [listTitleClick, setListTitleClick] = useState(false)

    const listMenuPopup = React.createRef()

    const addCard = (newCard) => {
        console.log(newCard);
        setCards(prevCards => prevCards ? [...prevCards, newCard] : [newCard])
    }

    const listActionPopup = (event) => {
        setShowMenu(true)
        let btn = event.target
        if(btn.nodeName === "i" || btn.nodeName ==="I"){
            btn = btn.parentNode;
        }
        const loc = btn.getBoundingClientRect();
        console.log(loc);
        listMenuPopup.current.style.top = loc.top + loc.height + 5 + "px";
        listMenuPopup.current.style.left = loc.left + "px";
        return listMenuPopup;
    }

    const submitTitleChange = () => {  
        console.log("title updated."); 
        if(list.title !== editableListTitle){
            Axios.put(`https://trello-clone-ppm.herokuapp.com/list/${list.id}`,{
                title: editableListTitle,
                position: list.position,
                status: list.status,
            })
            .then(res => {
                setEditableListTitle(res.data.title)
            })
        }
        setListTitleClick(false);
    }

    return(
        <div className="trello-list rounded m-1 px-2 py-1 pb-2 trello-fadein">
            <div className="d-flex justify-content-between align-items-center mb-1">
                {
                    listTitleClick ? 
                    <input autoFocus type="text" className="p-1 rounded m-1 trello-ease" id="list-title-input" 
                    value={editableListTitle} 
                    onChange={e => setEditableListTitle(e.target.value)} 
                    onBlur ={submitTitleChange}/>
                    : 
                    <h6 className="pl-2" onClick={() => setListTitleClick(true)}>{editableListTitle}</h6>
                }
               
                <button className="btn btn-sm" onClick={listActionPopup} ref={listMenuPopup}><i className ="fa fa-ellipsis-h"></i>
                </button>
            </div>
            <div className="px-1">
                {
                    cards && cards.map(card => (
                        <Cards key={card.id} card={card}/>
                    ))
                }
            </div>
            <AddCard addCard={addCard} listId={list.id} />
            {
                showMenu && <ListMenu />
            }
        </div>
    )
}

export default Lists
