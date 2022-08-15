import React from "react";
import { useNavigate,  Link as RouterLink } from 'react-router-dom'
import { Grid, Button, InputAdornment, IconButton, TextField } from "@mui/material";

export default function LoginPage () {

    return (
        <>
     <Grid style={{ display: "inline-block", backgroundImage: "url(https://cdn.shopify.com/s/files/1/0277/4394/4841/products/TipsooReflection_ee5f2a2d-43cd-4770-833c-c03ab886e242_1024x1024@2x.jpg?v=1579577552)",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100%",
    position: "absolute", 
    backgroundRepeat: "no-repeat", 
    }}>
         <Grid style={{ display: "inline-block", width: "100%", height: "100%" }}>
         <Grid style={{ width: "350px", height: "350px", margin: "auto", marginTop: "13%" }}>
            <form>
            <Grid container 
              alignItems="center"
              direction="column"
              textAlign="center"
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
                // value={formValues.username}
                // onChange={handleChange}
                // required
                />
                </Grid>
                <Grid item margin="auto" marginBottom="2.5%" >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        {/* <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="start">
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton> */}
                      </InputAdornment>
                    ),
                  }}
                  id="password-input"
                  name="password"
                  label="Password"
                  type="password"
                //   type={showPassword ? "text" : "password"}
                //   value={formValues.password || ""}
                //   onChange={handleChange}
                //   required
                />
                </Grid>  
                <Grid item margin="auto" marginBottom="2%">
                <Button type="submit" variant="outlined"
                >
                {/* // sx={{backgroundColor:"#33691e"}}> */}
                  Sign In
                </Button>
              </Grid>
              <h5>New here?</h5>
              <Grid item margin="auto" marginTop="1%">
                <Button variant="outlined" type="submit" 
                // sx={{backgroundColor:"#33691e"}}
                component={RouterLink} to="/signup">
                  Sign Up Instead
                </Button>
              </Grid>
            </Grid>
            </form>
            </Grid>
        </Grid>
    </Grid>
        </>
    )
}