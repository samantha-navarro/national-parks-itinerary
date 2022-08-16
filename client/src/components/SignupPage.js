import React from "react";
import { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const defaultValues = {
    full_name: "",
    username: "",
    password: "",
    email: "",
}

export default function SignupPage ({ setCurrentUser }) {

    const [formData, setFormData] = useState(defaultValues)
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const {username, password, full_name, email} = formData

    function handleSubmit(e){
        e.preventDefault()
        const user = {
            full_name,
            username,
            password,
            email,
        }
        fetch('/users', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    // set current user here
                    setCurrentUser(user)
                    // need to route user to their mainpage
                    navigate("/main")
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors).flat()))
                console.log(errors)
            }
        })
        setFormData(defaultValues)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return(
        <>
        <Grid style={{ display: "inline-block", backgroundImage: `url(https://pbs.twimg.com/media/FYDa6NMVUAEpwCQ?format=jpg&name=large)`,
         backgroundSize: "cover",
        backgroundAttachment: "fixed-right",
         width: "100%",
         height: "100%",
        position: "absolute", 
        backgroundRepeat: "no-repeat",
        }}>
        <Grid style={{ display: "inline-block", width: "100%", height: "100%" }}>
        <Grid style={{ width: "300px", height: "300px", margin: "auto", marginTop: "13%" }}>
        <form onSubmit={handleSubmit}>
            <Grid container 
            alignItems="center"
            direction="column"
            textAlign="center"
            color="whitesmoke"
            >
            <h2 style={{ marginTop: "2.5%", marginBottom: "2.5%", color: "whitesmoke" }}>SIGNUP<br></br>
            National Parks Itinerary</h2>
            <Grid item marginTop="5%" marginBottom="2%">
            <TextField
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    style: {color: "white"}
                  }}
                    id="full_name"
                    name="full_name"
                    label="Full Name"
                    type="text"
                    value={formData.full_name || ""}
                    onChange={handleChange}
                    required
                  />
            </Grid>
            <Grid item style={{ marginTop: "2.5%", marginBottom: "2.5%" }} >
            <TextField 
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    style: {color: "white"}
                  }}
                  id="username"
                  name="username"
                  label="Username"
                  type="text"
                  value={formData.username || ""}
                  onChange={handleChange}
                  required
                />
            </Grid>
            <Grid item style={{ marginTop: "2.5%", marginBottom: "2.5%" }} >
            <TextField 
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    style: {color: "white"}
                  }}
                  id="email"
                  name="email"
                  label="Email"
                  type="text"
                  value={formData.email || ""}
                  onChange={handleChange}
                  required
                />
            </Grid>
            <Grid item style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>
            <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  style: {color: "white"}
                }}
                id="password"
                name="password"
                label="Password"
                type="password"
                // type={showPassword ? "text" : "password"}
                value={formData.password || ""}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>
        <Button type="submit" variant="outlined">
           {/* sx={{ backgroundColor:"#bcaaa4" }}> */}
                Create Account
              </Button>
            </Grid>
            <Grid item marginBottom="5%">
            <Button
              type="submit"
              variant="outlined"
            //   sx={{backgroundColor:"#bcaaa4"}}
              component={RouterLink}
              to="/"
            >
              Login
            </Button>
            <h5>Already have an account?</h5>
            </Grid>
            </Grid>
            </form>
            </Grid>
        </Grid>
    </Grid>
        </>
    )
}