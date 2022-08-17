import React, { useEffect, useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import "./css/Activity.css";

export default function ActivityCard ({ fun }) {

    return (
        <div className="card">
            <img 
            src={fun.image}
            srcSet={fun.image}
            alt={fun.id}
            />
            <div className='card-body'>
                <h2>{fun.name}</h2>
                <p>{fun.description}</p>
                <br></br>
                <Link component={RouterLink} to="/itinerary">
                <Button variant="text" alignText="center" sx={{color: "#b0bec5"}}>Add to Itinerary</Button>
                </Link>
            </div>
        </div>
    )
}