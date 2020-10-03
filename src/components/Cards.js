import React from 'react'
import Label from './Label'
import Member from './Member'
import './Cards.css'

const Cards = ({card}) => {

    return (
        <div className="trello-card d-block mb-2 pt-2">
            {
                card.labels && card.labels.map(label => (
                    <Label key={label.id} label={label}/>
                ))
            }
            <h6 className="trello-title">{card.title}</h6>
            <div className="d-flex flex-wrap justify-content-between align-items-end">
                <div className="d-flex flex-nowrap align-items-center">
                    {card.description ? <small className="d-inline-block m-1 mr-2 text-secondary"><i className="fa fa-bars"></i></small> : ''}
                    {card.checklists.length ? <small className="d-inline-block m-1 mr-2 text-secondary"><i className="fa fa-check-square-o"></i></small> : ''}
                </div>
                <div className="d-flex flex-wrap justify-content-end flex-grow-1 align-items-center">
                    {
                        card.members && card.members.map(member => (
                            <Member key={member.id} member={member}/>
                        )) 
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards
