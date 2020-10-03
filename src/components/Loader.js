import React from 'react'
import './Loader.css'
import loader from '../images/loading.gif'

const Loader =  () => {
    return (
        <div id="loading">
            <img id="loading-image" src={loader} alt="Loading..." />
        </div>
    )
}

export default Loader
