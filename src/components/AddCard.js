import React, {useState} from 'react'
import './AddCard.css'
import Axios from 'axios'

const AddCard = ({listId, addCard, position}) => {
    const [addCardClick, setAddCardClick] = useState(false)
    const [cardTitle, setCardTitle] = useState("")

    const submitCard = (e) => {
        e.preventDefault()
        if(cardTitle !== ""){
            Axios.post("https://trello-clone-ppm.herokuapp.com/card/add/209", {
                "title": cardTitle,
                "description": null,
                "due_date": null,
                "position": position + 1,
                "status": 1,
                "list": {
                    "id": listId
                }
            })
            .then(res => {
                addCard(res.data)
            })
        }
        setCardTitle("")
        setAddCardClick(false)
    } 

    return (
        <div>
        {
            addCardClick ? (
                <div className="add-card-popup rounded trello-fadein m-1 p-1">
                    <input type="text" className="p-1 rounded" id="card-title-input" value={cardTitle} onChange={e => setCardTitle(e.target.value)} placeholder="Enter a title for this card..."/>
                    <div className="d-flex justify-content-between align-items-center pt-1">
                        <button type="submit" className="btn btn-sm btn-success my-1" onClick={submitCard}>Add Card</button>
                        <button className="btn btn-lg my-1 mx-2 p-0 text-danger" onClick={() => setAddCardClick(false)}><i className="fa fa-close"></i></button>
                    </div>
                </div>
            ) : (
                <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-sm text-left flex-grow-1" id="add-new-card" onClick={() => setAddCardClick(true)}>
                            <i className="fa fa-plus"></i>&nbsp;&nbsp;Add a card
                        </button>
                        <button className="btn btn-sm"><i className="fa fa-window-maximize"></i></button>
                </div>
            )
        }
        </div>
    )
}

export default AddCard
