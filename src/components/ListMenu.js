import React from 'react'
import './ListMenu.css'

const ListMenu = ({showMenu}) => {

    return (
        <div className="list-menu rounded trello-fadein p-1" id="list-menu-popup">
            <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-action">Add Card...</li>
                <li className="list-group-item list-group-item-action">Copy List...</li>
                <li className="list-group-item list-group-item-action">Move List...</li>
                <li className="list-group-item list-group-item-action">Watch...</li>
                <li className="list-group-item text-danger list-group-item-action"><i className="fa fa-trash"></i>&nbsp;&nbsp;&nbsp;Delete...</li>
            </ul>
      </div>
    )
}

export default ListMenu
