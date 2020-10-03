import React from 'react'
import './BottomNav.css'

const BottomNav = () => {
    return(
        <nav id="nav-2" className="d-flex flex-wrap justify-content-between nav-2 my-1">
            <div className="d-flex flex-wrap">
                <div className="text-light font-weight-bold m-1 px-3">FE - Common</div>
                <button className="btn btn-sm text-light m-1"><i className="far fa-star"></i></button>
                <div className="vl m-1"></div>
                <div className="no-border text-light mx-2 my-1">Private Team</div>
                <div className="vl m-1"></div>
                <button className="btn btn-sm text-light m-1"><i className="fas fa-user-friends"></i>&nbsp;&nbsp;&nbsp;Team Visible</button>
                <div className="vl m-1"></div>
                <button className="btn btn-sm text-light avatar profile"></button>
                <button className="btn btn-sm text-light avatar profile1"></button>
                <button className="btn btn-sm text-light avatar profile2"></button>
                <button className="btn btn-sm text-light avatar plus">+3</button>
                <button className="btn btn-sm text-light m-1">Invite</button>
            </div>

            <div className="d-flex justify-content-end flex-grow-1">
                <button className="btn btn-sm text-light m-1"><i className="fas fa-concierge-bell"></i>&nbsp;&nbsp;&nbsp;Bulter (5 Tips)</button>
                <button className="btn btn-sm text-light m-1"><i className="fas fa-ellipsis-h"></i>&nbsp;&nbsp;&nbsp;Show Menu</button>
            </div>
        </nav>
    )
}

export default BottomNav
