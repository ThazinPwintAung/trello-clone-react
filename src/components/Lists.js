import React, { useState } from 'react'
import AddCard from './AddCard'
import Cards from './Cards'
import './Lists.css'

const Lists = ({list, card}) => {
    const [cards, setCards] = useState(card)

    const addCard = (card) => {
        setCards(prevCard => [...prevCard, card])
    }

    return(
        <div className="trello-list rounded m-1 px-2 py-1 pb-2 trello-fadein">
            <div className="d-flex justify-content-between align-items-center mb-1">
                <h6 className="pl-2">{list.title}</h6>
                <button className="btn btn-sm"><i className ="fa fa-ellipsis-h"></i></button>
            </div>
            <div className="px-1">
                {
                    cards && cards.map(card => (
                        <Cards key={card.id} card={card}/>
                    ))
                }
            </div>
            <AddCard addCard={addCard} position={cards.length} listId={list.id} />
        </div>
    )
}

export default Lists
