import Axios from 'axios'
import React, { useState } from 'react'
import './AddAnotherList.css'

const AddAnotherList = ({ addList, position}) => {
    const [addListClick, setAddListClick] = useState(false)
    const [listTitle, setListTitle] = useState("")

    const addListPopup = () => {
        setAddListClick(true);
    }

    const submitList = e => {
        e.preventDefault()
        if(listTitle !== ""){
            Axios.post("https://trello-clone-ppm.herokuapp.com/list", {
                title: listTitle,
                position: position + 1,
            })
            .then(res => {
                addList(res.data)
            })
        }
        setListTitle("")
        setAddListClick(false)
    }

    return (
        <div>
        {
            addListClick ? (
                <div className="add-list-popup rounded trello-fadein m-1 p-1">
                    <input autoFocus type="text" className="p-1" id="list-title-input" value={listTitle} onChange={e => setListTitle(e.target.value)} 
                     placeholder="Enter list title..."/>
                    <div className="d-flex justify-content-between align-items-center pt-1">
                        <button type="submit" className="btn btn-sm btn-success my-1" onClick={submitList}>Add List</button>
                        <button className="btn btn-lg my-1 mx-2 p-0 text-danger" onClick={() => setAddListClick(false)}><i className="fa fa-close"></i></button>
                    </div>
                </div>
            ) : (
                <div className="btn btn-lg add-list m-1 text-left mr-3" onClick={addListPopup}>
                <i className="fa fa-plus"></i>&nbsp;&nbsp;&nbsp;Add another list
                </div>
            )
        }
        </div>
    )
}

export default AddAnotherList
