// import React from "react";
import { React, useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import NavBar from './NavBar';
import ParksCard from './ParksCard';


export default function Parks () {

  const [allParks, setAllParks] = useState([]);
  const [errors, setErrors] = useState([]);

  // requesting all parks
  useEffect(() => {
    fetch("/parks")
    .then(res => {
      if (res.ok){
        res.json().then(parks => {
          setAllParks(parks)
        })
    } else {
      res.json().then(json => setErrors(Object.entries(json.errors)))
    }
  })
}, []);
  

    return (
      <>
      <NavBar />
        <Grid style={{ display: "inline-block", backgroundImage: "url(https://pbs.twimg.com/media/FYDa6NMVUAEpwCQ?format=jpg&name=large)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "100%",
        // position: "absolute", 
        backgroundRepeat: "no-repeat", 
        }}>
        <Typography variant="h4" mt={20} align="center" color="white">
            Choose a Park for Activities
        </Typography>
        {allParks.map((park) => (
        <ParksCard key={park.id} park={park}/>
        ))}
      </Grid>
      </>
    )
}