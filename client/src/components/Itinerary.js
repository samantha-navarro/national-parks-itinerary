 import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Button, Grid, Typography } from '@mui/material';
import "./css/Activity.css";
import ItineraryCard from "./ItineraryCard";

export default function Itinerary () {
    //keep track of our logged in user's itinerary during this session
    const [addItinerary, setAddItinerary] = useState([])

    // useEffect(() => {
    //     if
    // })

    return (
        <>
        <NavBar />
        <Grid style={{ display: "inline-block", backgroundImage: "url(https://pbs.twimg.com/media/E4huRxsWUAQa64W?format=jpg&name=large)",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100%",
    position: "absolute", 
    backgroundRepeat: "no-repeat", }}>
    <Typography variant="h1" mt={10} align="center" color="black">
        Itinerary
    </Typography> 
    <div className="cards">
        <ItineraryCard 
        // img=""
        // title="activty"
        // itinerary="button"
        />
        </div>
    </Grid>
        </>
    )
}