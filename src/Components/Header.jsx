import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import DescriptionIcon from '@material-ui/icons/Description';

function Header() {
    return (
        <div className="header-main">
            <div className="logo">
                <img src="/NEO.png" alt=""/>
            </div>
            <div className="options">
                <NavLink className="nav-link active" aria-current="page" to="/Home"><HomeIcon className="homeicon" fontSize="large"/></NavLink>
                <NavLink className="nav-link" aria-current="page" to="/Explore"><ExploreIcon className="exploreicon" fontSize="large"/></NavLink>
                <NavLink className="nav-link" aria-current="page" to="/Report"><DescriptionIcon className="exploreicon" fontSize="large"/></NavLink>
            </div>
        </div>
    )
}

export default Header
