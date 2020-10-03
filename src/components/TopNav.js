import React from 'react'
import Loader from './Loader'
import Logo from './Logo'
import './TopNav.css'

const TopNav = ({isLoading}) => {
    return(
        <nav id="nav-1" className="d-flex justify-content-between nav-1 py-1">
            <div className="d-flex">
                <button className="btn btn-sm text-light m-1"><i className="fa fa-th"></i></button>
                <button className="btn btn-sm text-light m-1"><i className="fa fa-home"></i></button>
                <button className="btn btn-sm text-light m-1 font-weight-bold"><i className="far fa-clipboard"></i>&nbsp;&nbsp;&nbsp;Boards</button> 
            </div>

            <div className="d-flex justify-content-center align-items-center">
            {isLoading ? <Loader /> : <Logo />}
            </div>

            <div className="d-flex">
                <button className="btn btn-sm text-light m-1"><i className="fa fa-plus"></i></button>
                <button className="btn btn-sm text-light m-1"><i className="fa fa-info-circle"></i></button>
                <button className="btn btn-sm text-light m-1"><i className="fa fa-bell"></i></button>
                <button className="btn btn-sm text-light m-1 avatar profile"></button>
            </div>
        </nav>
    )
}

export default TopNav
