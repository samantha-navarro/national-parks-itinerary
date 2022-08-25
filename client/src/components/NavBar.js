import React, { useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"; 
import { blueGrey } from "@mui/material/colors";
import { Avatar, Modal, Box, Button } from "@mui/material";
// import { white } from 'material-ui/colors'
import './css/NavBar.css'

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

export default function NavBar ({ setCurrentUser }) {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    //Material UI
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //logout button
    const handleLogOut = () => {
        //DELETE '/logout'
        fetch('/logout', {
            method: "DELETE"
        })
        setCurrentUser(false)
        localStorage.clear();
        Navigate('/')
    };

    return (
        <div className="header">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to="/main">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/parks">PARKS</Link>
                </li>
                <li>
                    <Link to="/itinerary">ITINERARY</Link>
                </li>
                <li>
                    <Link onCLick={handleLogOut} to="/">LOGOUT</Link>
                </li>
                <li>
                <Button onClick={handleOpen}>CONTACT</Button>
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <h2>Contact Info:</h2>
        {/* <br></br> */}
        {/* <Avatar
         justifyContent="center" alignItems="center"
        alt="photo"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGtnE0Ok5I0og/profile-displayphoto-shrink_800_800/0/1655774563469?e=1666828800&v=beta&t=toY_DHEl6Dz6BrU_MNpREc8kyE5oXep-xDNAjLSzHb4"
        sx={{ width: 120, height: 120 }}/> */}
        <br></br>
          <h1>Samantha Navarro</h1>
          <p>I am a Full Stack Software Developer</p>
          <br></br>
          <br></br>
          <h3>For any questions or want to connect!</h3>
          <br></br>
          <p>Linkedin:</p>
          <p>https://www.linkedin.com/in/samantha-m-navarro/</p>
          <p>Email:</p>
          <p>samantha.m.navarro@gmail.com</p>
        </Box>
      </Modal>
                </li>

            </ul>
            <div className="icons" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: blueGrey}} />) : 
            (<FaBars size={20} style={{color: blueGrey}} />)}
            </div>
        </div>
    )
}