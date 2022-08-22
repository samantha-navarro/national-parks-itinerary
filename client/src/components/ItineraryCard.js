import React, { useState } from "react";
import ToDoList from "./ToDoList.js";
import { Button, Modal, Box, Typography } from '@mui/material';
import "./css/Activity.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ItineraryCard ({ plan, deletePost }) {

  //Material UI
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                <br></br>
                <Button onClick={handleOpen}
                sx={{color: "#b0bec5"}}>TO Do</Button>
                <Button 
                onClick={handleDeleteClick}
                variant="text" 
                alignText="center" 
                sx={{color: "red", float: "right"}}>Delete</Button>
              
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ToDoList />
        </Box>
      </Modal>
            </div>
        </div>
        </>
    )
}