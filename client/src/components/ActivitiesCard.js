import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import "./css/Activity.css";

const defaultValues = {
    user_id: undefined,
    activity_id: undefined,
    date: ""
  }

export default function ActivityCard ({ fun, userId }) {
    const [postValues, setPostValues] = useState(defaultValues);

    // const navigate = useNavigate()

useEffect(() => {
  setPostValues({  
    user_id: userId,
    activity_id: fun.id,
    date: new Date() })
}, [fun, userId])

    // adding activity to itinerary
    const handleSubmit = (e) => {
      e.preventDefault();
      const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({...postValues}),
      }
      fetch('/itineraries', configObj)
      .then(res => res.json())
      .then((newItinerary) => setPostValues(newItinerary))
      // navigate('/itinerary')
      setPostValues(defaultValues)
    }

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
                <Button onClick={handleSubmit}variant="text" alignText="center" sx={{color: "#b0bec5"}}>Add to Itinerary
                </Button>
                </Link>
            </div>
        </div>
    )
}