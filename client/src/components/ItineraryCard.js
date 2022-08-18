import React, { useState } from "react";
import NavBar from "./NavBar";
import { Button, TextField } from '@mui/material';
import "./css/Activity.css";

export default function ItineraryCard ({ plan, deletePost }) {

  //DELETE
  function handleDeleteClick () {
    //make a delete fetch request and update the backend as the post state
    fetch(`/itineraries/${plan.id}`, {
      method: "DELETE"
    })
    deletePost(plan.id)
  }


    return (
        <>
        
        <div className="card">
            <img src={plan.activity.image}
            srcSet={plan.activity.image}
            alt={plan.activity.id}/>
            <div className='card-body'>
                <h2>{plan.activity.name}</h2>
                <p>{plan.activity.description}</p>
                <br></br>
                <h3>Date created: {plan.date}</h3>
                <br></br>
                <Button 
                onClick={handleDeleteClick}
                variant="text" 
                alignText="center" 
                sx={{color: "#b0bec5"}}>Delete</Button>
            </div>
        </div>
        </>
    )
}