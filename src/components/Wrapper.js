import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Lists from './Lists'
import './Wrapper.css'
import AddAnotherList from './AddAnotherList'
import ListMenu from './ListMenu'

const Wrapper = ({setIsLoading}) => {
    const [lists, setLists] = useState([])
    const [listId, setListId] = useState("")

    const listMenuPopup = document.getElementById("list-menu-popup")

    const fetchLists = async () => {
        console.log("use effect running");
        try{
            const res = await Axios.get("https://trello-clone-ppm.herokuapp.com/list")
            setLists(res.data)
            setIsLoading(false)
        }catch {
            setLists([])
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchLists()
    },[lists])

    const addList = (list) => {
        setLists((prevLists) => [...prevLists, list])
    }

    const deleteList = (listid) => { 
       if(listid){
           closeListMenu(true)
           if(window.confirm("Are you sure to delete this list?")){
                Axios.delete(`https://trello-clone-ppm.herokuapp.com/list/${listid}`)
               .then(res => {
                   console.log(res);
                   console.log("Deleted successfully");
                   listid = undefined
               })
               .catch(err => {
                   console.log(err);
                   listid = undefined
               })
           }
       }
    }

    const showListMenu = (e,listid) => {
        setListId(listid);
        e.stopPropagation();

        let btn = e.target
        if(btn.nodeName === "i" || btn.nodeName ==="I"){
            btn = btn.parentNode;
        }
        const loc = btn.getBoundingClientRect();
        listMenuPopup.style.top = loc.top + loc.height + 5 + "px"
        listMenuPopup.style.left = loc.left + "px"
        closeListMenu(false)
    }

    const closeListMenu = (close) => {
        if(listMenuPopup){
            listMenuPopup.style.display = close ? "none":"block"
        }
    }

    return(
        <div id="wrapper" className="px-2" onClick={() => closeListMenu(true)} onScroll={() => closeListMenu(true)}>
            {
                lists && lists.map(list => (
                    <Lists key={list.id} list={list} card={list.cards}
                    showListMenu={showListMenu} />
                ))
            }
            { lists.length !== 0 &&
                <AddAnotherList addList={addList} position={lists.length}/>
            }

            <ListMenu
            listId={listId} 
            closeListMenu={closeListMenu}
            deleteList={deleteList} />
        </div>
    )

}

export default Wrapper
