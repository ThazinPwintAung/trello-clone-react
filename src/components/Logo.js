import React from 'react'
import './Logo.css'
import logo from '../images/logo.png'

const Logo = () => {
    return(
        <div>
            <img id="logo" src={logo} alt="TrelloLogo" />
        </div>
    )
}

export default Logo
