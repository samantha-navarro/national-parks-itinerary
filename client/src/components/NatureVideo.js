import React from "react";
import { Link } from "react-router-dom";
import "./css/NatureVideo.css";

// import spaceVideo from "../assets/space.mp4"

export default function NatureVideo () {

    return (
        <div>This is NatureVideo
        <div className="video">
            <video autoPlay loop muted id="video">
                {/* <source src={} type="video/mp4" /> */}
            </video>
        <div className='content'>
            <h1>Plan. Travel. Nature.</h1>
            <p>Your next Itinerary trip of a lifetime.</p>
        </div>
            {/* <Link to="/" className="btn">Parks</Link>
            <Link to="/" className="btn btn-light">Activities</Link> */}
        </div>
        </div>
    )
}

