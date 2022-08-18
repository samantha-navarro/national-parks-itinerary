 import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Button, Grid, Typography } from '@mui/material';
import "./css/Activity.css";
import ItineraryCard from "./ItineraryCard";


export default function Itinerary ({ fun }) {
    //keep track of our logged in user's itinerary during this session
    const [addItinerary, setAddItinerary] = useState([])
    const [errors, setErrors] = useState([]);
    //keep track of our loggied in user's  plan during this session


    //requesting all itineraries from activities
    useEffect(() => {
        fetch("/itineraries")
        .then(res => {
            if(res.ok){
                res.json().then(itinerary => {
                    setAddItinerary(itinerary)
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }, []);

    const deletePost = (id) => setAddItinerary
    (current => current.filter(p => p.id !== id))




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
        {addItinerary.map((plan) => (
            <ItineraryCard key={plan.id} plan={plan} deletePost={deletePost}
            />
        ))}
        </div>
    </Grid>
        </>
    )
}