import React, { useState } from "react";
import Signup from "./Signup.js";
import Login from "./Login.js";
import { useSpring, animated } from "react-spring";
import './App.css'

function App() {

  //css
  const [signup, setSignUp] = useState (false);
  const loginStyle = useSpring({
    left: signup ? -500 : 0
    // opacity: signup ? 0 : 1
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
    <div className="login-signup-wrapper">
  
     <div className='nav-buttons'>
              <animated.button
              onClick={loginClicked}
              id="loginBtn" 
              style={loginBtnStyle}
              // className="active"
              >Login</animated.button>
              <animated.button 
              onClick={signupClicked}
              id="signupBtn"
              style={signupBtnStyle}>Signup</animated.button>
     </div>
     <div className="form-group">
      {/* //wrap animation form */}
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
       {/* <animated.div className="forgot-panel" style={loginStyle}><a href="#">Forgot your password</a></animated.div> */}
    </div>
  );
}

export default App;
