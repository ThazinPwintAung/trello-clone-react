import React, {useState} from 'react'
import Label from './Label'
import Member from './Member'
import './Cards.css'
import Axios from 'axios'
import EditCard from './EditCard'

const Cards = ({card, cardId}) => {
    const [c, setCard] = useState({})
    const [editCardClick, setEditCardClick] = useState(false)
    const [cardid, setCardid] = useState(cardId)

    const cardMenuPopup = document.getElementById("card-menu-popup")

    const editCard = (e, cid) => {
        setEditCardClick(true);
        try{
            Axios.get(`https://trello-clone-ppm.herokuapp.com/card/${cid}`)
            .then(res => {
                setCard(res.data)
            })
            showCardMenu(e, cid)
        }catch{
                setCard({})
        }
    }

    const showCardMenu = (e, cid) => {
        e.preventDefault()
        setCardid(cid)
        let btn = e.target
        if(btn.nodeName === "i" || btn.nodeName ==="I"){
            const loc = btn.getBoundingClientRect();
            cardMenuPopup.style.top = loc.top + loc.height + 5 + "px"
            cardMenuPopup.style.left = loc.left + "px"
        }
        closeCardMenu(false)
    }

    const closeCardMenu = (close) => {
        if(cardMenuPopup){
            cardMenuPopup.style.display = close ? "none":"block"
        }
    }
    
    return (
        <div className="trello-card d-block mb-2 pt-2">
            <i className="far fa-edit float-right" style={{opacity: 0.1}} onClick={(e) => editCard(e, cardid)} onDoubleClick={() => closeCardMenu(true)}></i>
            {
                card.labels && card.labels.map(label => (
                    <Label key={label.id} label={label}/>
                ))
            }
            <h6 className="trello-title">{card.title}</h6>
            <div className="d-flex flex-wrap justify-content-between align-items-end">
                <div className="d-flex flex-nowrap align-items-center">
                    {card.description ? <small className="d-inline-block m-1 mr-2 text-secondary"><i className="fa fa-bars"></i></small> : '' }
                    {card.checklists ? card.checklists.map(chk => (<small className="d-inline-block m-1 mr-2 text-secondary" key={chk.id}><i className="fa fa-check-square-o"></i></small>)) : ''}
                </div>
                <div className="d-flex flex-wrap justify-content-end flex-grow-1 align-items-center">
                    {
                        card.members && card.members.map(member => (
                            <Member key={member.id} member={member}/>
                        )) 
                    }
                </div>
            </div>
            {
                editCardClick && <EditCard card={c} cardTitle={c.title} />
            }
        </div>
    )
}

export default Cards
