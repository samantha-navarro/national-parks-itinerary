import React, { useState } from "react";
import NavBar from "./NavBar";
import { Button, TextField } from '@mui/material';
import "./css/Activity.css";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function ItineraryCard () {

    const [value, setValue] = React.useState(null);

    return (
        <>
        
        <div className="card">
            <img src=""/>
            <div className='card-body'>
                <h2>Title</h2>
                <p>Description</p>
                <br></br>

                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}


                <h3>Date created: 08.08.22</h3>
                <br></br>
                <Button variant="text" alignText="center" sx={{color: "#b0bec5"}}>Delete</Button>
            </div>
        </div>
        </>
    )
}