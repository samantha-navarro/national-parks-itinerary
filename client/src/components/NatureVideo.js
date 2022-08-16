import React from "react";
import { Link } from "react-router-dom";
import "./css/NatureVideo.css";
import nature from "../assets/nature.mp4";
import { Button } from "@mui/material";

export default function NatureVideo () {
    return (
        <div className="travel">
            <video autoPlay loop muted id="video">
                <source src={nature} type="video/mp4" />
            </video>
        <div className='content'>
            <h1>Plan. Travel. Adventure.</h1>
            <p>Your next Itinerary trip of a lifetime</p>
        <div>
        <Button variant="outlined">
            <Link to="/parks" className="btn">Parks</Link>
            </Button>
            <Button>
            <Link to="/itinerary" className="btn btn-light">Itinerary</Link>
            </Button>
        </div>
        </div>
        </div>
    )
}

