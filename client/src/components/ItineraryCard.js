import React from "react";
import NavBar from "./NavBar";
import { Button } from '@mui/material';
import "./css/Activity.css";

export default function ItineraryCard () {

    return (
        <>
        <div className="card">
            <img src=""/>
            <div className='card-body'>
                <h2>Title</h2>
                <p>Description</p>
                <br></br>
                <Button variant="text" alignText="center" sx={{color: "#b0bec5"}}>Delete</Button>
            </div>
        </div>
        </>
    )
}