import { React, useState, useEffect } from "react";
import { Grid, Typography } from '@mui/material';
import ActivityCard from "./ActivitiesCard";
import "./css/Activity.css";
import NavBar from "./NavBar";
import { useSearchParams } from "react-router-dom";

export default function Activities ({ park }) {

    const [allActivities, setAllActivities] = useState([]);
    const [errors, setErrors] = useState([]);
    const [params] = useSearchParams()
    const parkId = (params.get("park_id"))


    //requesting all activities from parks
    useEffect(() => {
        fetch(`/parks/${parkId}/activities`)
        .then(res => {
          if (res.ok){
            res.json().then(activity => {
              setAllActivities(activity)
            })
        } else {
          res.json().then(json => setErrors(Object.entries(json.errors)))
        }
      })
    }, []);

    //filtering Activities
    // {activity.filter(fun => fun.park_id).map(parkActivities => (
    //     <ActivityCard key={parkActivities}
    //     parkActivities={parkActivities}/>
    // ))}


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
        {allActivities.map((fun) => (
        <ActivityCard key={fun.id} fun={fun}
        />
        ))}
        </div>
    </Grid>
    </>
    )
}