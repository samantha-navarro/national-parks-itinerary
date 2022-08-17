import React from "react";
import { Grid, Typography } from '@mui/material';
import ActivityCard from "./ActivitiesCard";
import "./css/Activity.css";
import NavBar from "./NavBar";

export default function Activities () {


    return (
        <>
        <NavBar/>
        <Grid style={{ display: "inline-block", backgroundImage: "url(https://mild2wildrafting.com/wp-content/uploads/2021/01/IMG_1794-1536x1024.jpg)",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100%",
    position: "absolute", 
    backgroundRepeat: "no-repeat", }}>
    <Typography variant="h1" mt={10} align="center" color="white">
        Activities
    </Typography>
    <div className="cards">
        <ActivityCard 
        img=""
        title="activty"
        itinerary="button"
        />
        </div>
    </Grid>
    </>
    )
}