import React, { useState } from 'react'
import Label from './Label'
import Member from './Member'
import './Cards.css'
import CardModal from './CardModal'

const Cards = ({card}) => {
    const [showCardModal, setShowCardModal] = useState(false)
    const [editCardClick, setEditCardClick] = useState(false)

    const showModal = () => {
        setShowCardModal(true);
    }

    const hideModal = () => {
        setShowCardModal(false);
    }

    const editCard = () => {
        setEditCardClick(true)
    }

    return (
        <div className="trello-card d-block mb-2 pt-2" onClick={showModal} >
            <i className="far fa-edit float-right" style={{opacity: 0.1}} onClick={editCard}></i>
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
            {/*<CardModal card={card} show={showCardModal} handleClose={hideModal}/>*/}
            {
                editCardClick 
            }
        </div>
    )
}

export default Cards
