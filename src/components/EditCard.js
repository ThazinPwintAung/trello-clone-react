import React from 'react'
import './EditCard.css'

const EditCard = (cardTitle) => {
    return(
        <div className="card-menu rounded trello-fadein p-1" id="card-menu-popup">
            <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action">
                <i className="fas fa-tag"></i>
                &nbsp;&nbsp; Edit Labels</li>
                <li className="list-group-item list-group-item-action">
                <i className="far fa-user"></i>
                &nbsp;&nbsp; Change Members</li>
                <li className="list-group-item list-group-item-action">
                <i className="fas fa-arrow-right"></i>
                &nbsp;&nbsp; Move</li>
                <li className="list-group-item list-group-item-action">
                <i className="fas fa-tv"></i>
                &nbsp;&nbsp; Copy </li>
                <li className="list-group-item text-danger list-group-item-action">
                <i className="fa fa-trash"></i>&nbsp;&nbsp;&nbsp;Delete...</li>
            </ul>
        </div>
    )
}

export default EditCard
