import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"; 
import { green } from "@mui/material/colors";
import './css/NavBar.css'

export default function NavBar () {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className="header">
            <Link to="/"><h1>National Parks Itinerary</h1></Link>
            {/* <ul className="nav-menu"> */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/enter">SIGNUP / LOGIN</Link>
                </li>
                {/* <li>
                    <Link to="/parks">PARKS</Link>
                </li>
                <li>
                    <Link to="/itinerary">ITINERARY</Link>
                </li> */}
            </ul>
            <div className="icons" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "green"}} />) : (  <FaBars size={20} style={{color: "green"}} />)}
            </div>
        </div>
    )
}