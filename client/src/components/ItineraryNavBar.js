import React, { useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"; 
import { blueGrey } from "@mui/material/colors";
import './css/NavBar.css'


export default function ItineraryNavBar({ setCurrentUser}) {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

        //logout button
        const handleLogOut = () => {
            //DELETE '/logout'
            fetch('/logout', {
                method: "DELETE"
            })
            setCurrentUser(false)
            localStorage.clear();
            Navigate('/')
        };

  return (
    <div>
             <div className="header">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to="/main">HOME</Link>
                </li>
                <li>
                    <Link to="/parks">PARKS</Link>
                </li>
                <li>
                    <Link onCLick={handleLogOut} to="/">LOGOUT</Link>
                </li>
            </ul>
            <div className="icons" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "blueGrey"}} />) : (<FaBars size={20} style={{color: "blueGrey"}} />)}
            </div>
        </div>
    </div>
  )
}
