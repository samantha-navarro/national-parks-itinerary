import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"; 
import { blueGrey } from "@mui/material/colors";
import './css/NavBar.css'

export default function NavBar () {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    

    return (
        <div className="header">
            {/* <Link to="/main"><h1>National Parks Itinerary</h1></Link> */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to="/main">HOME</Link>
                </li>
                <li>
                    <Link to="/parks">PARKS</Link>
                </li>
                <li>
                    <Link to="/">LOGOUT</Link>
                </li>
            </ul>
            <div className="icons" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "blueGrey"}} />) : (<FaBars size={20} style={{color: "blueGrey"}} />)}
            </div>
        </div>
    )
}