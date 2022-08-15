import React from "react";
import { useState } from "react";
import { Grid, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function SignupPage ({ setCurrentUser }) {

    // const [showPassword, setShowPassword] = useState(false);

    // const handleClickShowPassword = () => {
    //     setShowPassword((currentState) => !currentState);
    // };


    return(
        <>
           <Grid style={{ display: "inline-block", backgroundImage: `url(https://cdn.shopify.com/s/files/1/0277/4394/4841/products/TipsooReflection_ee5f2a2d-43cd-4770-833c-c03ab886e242_1024x1024@2x.jpg?v=1579577552)`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed-right",
      width: "100%",
      height: "100%",
      position: "absolute", 
      backgroundRepeat: "no-repeat",
      }}>
    <Grid style={{ display: "inline-block", width: "100%", height: "100%" }}>
    <Grid style={{ width: "300px", height: "300px", margin: "auto", marginTop: "13%" }}>
        <form>
          {/* <form onSubmit={handleSubmit}> */}
            <Grid container 
            alignItems="center"
            direction="column"
            textAlign="center"
            >
            <h2 style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>SIGNUP<br></br>
            National Parks Itinerary</h2>
            <Grid item marginTop="5%" marginBottom="2%">
            <TextField
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {/* <GiCat/> */}
                        </InputAdornment>
                      ),
                    }}
                    id="full_name"
                    name="full_name"
                    label="Full Name"
                    type="text"
                    // value={formData.full_name || ""}
                    // onChange={handleChange}
                    // required
                  />
            </Grid>
            <Grid item style={{ marginTop: "2.5%", marginBottom: "2.5%" }} >
            <TextField 
            // style={{ color: "grey"}}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
            
                    startAdornment: (
                      <InputAdornment position="start">
                        {/* <IoLogoOctocat /> */}
                      </InputAdornment>
                    ),
                  }}
                  id="username"
                  name="username"
                  label="Username"
                  type="text"
                //   value={formData.username || ""}
                //   onChange={handleChange}
                //   required
                />
            </Grid>
            <Grid item style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>
            <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      {/* <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="start"
                      > */}
                        {/* {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton> */}
                    </InputAdornment>
                  ),
                }}
                id="password"
                name="password"
                label="Password"
                type="password"
                // type={showPassword ? "text" : "password"}
                // value={formData.password || ""}
                // onChange={handleChange}
                // required
              />
            </Grid>
            <Grid item style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>
        <Button type="submit" variant="outlined">
           {/* sx={{ backgroundColor:"#bcaaa4" }}> */}
                Create Account
              </Button>
            </Grid>
            <Grid item marginBottom="5%">
            <h5>Already have an account?</h5>
            <Button
              type="submit"
              variant="outlined"
            //   sx={{backgroundColor:"#bcaaa4"}}
              component={RouterLink}
              to="/"
            >
              Login Instead
            </Button>
            </Grid>
            </Grid>
            </form>
            </Grid>
        </Grid>
    </Grid>
        Hello Rose
        </>
    )
}