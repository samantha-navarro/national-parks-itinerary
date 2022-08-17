import React, { useState } from "react";
import Signup from "./Signup.js";
import Login from "./Login.js";
import { useSpring, animated } from "react-spring";
import './css/FirstPage.css'
import { Grid } from "@mui/material";

export default function FirstPage(setCurrentUser) {

//   //login values
//   const defaultValues = {
//     username: "",
//     password: "",
// }

//signup values

  //CSS
  const [signup, setSignUp] = useState (false);
  const loginStyle = useSpring({
    left: signup ? -500 : 0
  })

  const signupStyle = useSpring({
    left: signup ? 0 : 500
    // opacity: signup ? 1 : 0
  })

  const loginBtnStyle = useSpring ({ borderBottom: signup ? "solid 0px transparent" : "solid 2px beige" })
  const signupBtnStyle = useSpring ({ borderBottom: signup ? "solid 2px beige" : "solid 0px transparent" })


  function signupClicked() {setSignUp(true)};
  function loginClicked() {setSignUp(false)};



  return (
    <Grid style={{ display: "inline-block", backgroundImage: "url(https://cdn.shopify.com/s/files/1/0277/4394/4841/products/TipsooReflection_ee5f2a2d-43cd-4770-833c-c03ab886e242_1024x1024@2x.jpg?v=1579577552)",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100%",
    position: "absolute", 
    backgroundRepeat: "no-repeat", 
    }}>

    <div className="login-signup-wrapper">
     <div className='nav-buttons'>
              <animated.button
              onClick={loginClicked}
              id="loginBtn" 
              style={loginBtnStyle}
              // className="active"
              >Login</animated.button>
            <div></div>
            <br></br>
              <animated.button 
              onClick={signupClicked}
              id="signupBtn"
              style={signupBtnStyle}>Signup</animated.button>
     </div>
     <br></br>
     <div className="form-group">
      <animated.form action="" 
      id="loginform" 
      style={loginStyle}>
          <Login />
      </animated.form>
        <animated.form action="" 
        id="signupform" 
        style={signupStyle}>
          <Signup />
        </animated.form>
     </div>
    </div>
    </Grid>
  );
}