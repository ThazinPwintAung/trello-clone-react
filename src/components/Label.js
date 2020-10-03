import React from 'react'
import './Label.css'

const Label = ({label}) => {
    return(
        <span className="trello-label d-inline-block mr-1" style={{backgroundColor: label.color}} />
    )
}

export default Label
