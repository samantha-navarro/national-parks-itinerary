import { React, useState } from "react";
import { useNavigate,  Link as RouterLink } from 'react-router-dom'
import { Grid, Button, TextField } from "@mui/material";
import NavBar from "./NavBar";
import nightsky from "../assets/nightsky.mp4";

const defaultValues = {
    username: "",
    password: "",
}

export default function LoginPage ({ setCurrentUser }) {

    const [formValues, setFormValues] = useState(defaultValues);

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ ...formValues }),
          };


    fetch("/", configObj)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Incorrect Username or Password. Try Again!');
    })
    .then((user) => {
      // set the state of the user
      setCurrentUser(user)
      // route user to their mainpage
      navigate("/mainpage")
    })
    .catch((error) => {
      alert(error)
    })
    setFormValues(defaultValues);
    };


    return (
        <>
      <video autoPlay loop muted id="video">
      <source src={nightsky} type="video/mp4" />
            </video>
         <Grid style={{ display: "inline-block", width: "100%", height: "100%" }}>
         <Grid style={{ width: "350px", height: "350px", margin: "auto", marginTop: "13%" }}>
            <form onSubmit={handleSubmit}>
            <Grid container 
              alignItems="center"
              direction="column"
              textAlign="center"
              color="whitesmoke"
              >
                  <h2 style={{ marginTop: "5%" }}>Login to 
                  <br></br>National Parks Itinerary</h2>
                  <Grid item margin="auto" marginTop="5%" marginBottom="2.5%">
                  <TextField
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    style: {color: "white" }
                  }}
                id="username"
                name="username"
                label="Username"
                type="text"
                value={formValues.username}
                onChange={handleChange}
                required
                />
                </Grid>
                <Grid item margin="auto" marginBottom="2.5%" >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    style: {color: "white"}
                   
                  }}
                  id="password-input"
                  name="password"
                  label="Password"
                  type="password"
                //   type={showPassword ? "text" : "password"}
                  value={formValues.password || ""}
                  onChange={handleChange}
                  required
                />
                </Grid>  
                <Grid item margin="auto" marginBottom="2%">
                <Button type="submit" variant="outlined"
                >
                {/* // sx={{backgroundColor:"#33691e"}}> */}
                  Sign In
                </Button>
              </Grid>
              <Grid item margin="auto" marginTop="1%">
                <Button variant="outlined" type="submit" 
                // sx={{backgroundColor:"#33691e"}}
                component={RouterLink} to="/signup">
                  Create an Account
                </Button>
                <h5>New here?</h5>
              </Grid>
            </Grid>
            </form>
            </Grid>
        </Grid>
    {/* </Grid> */}
        </>
    )
}