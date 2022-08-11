import { useState } from "react";
import Signup from "./Signup.js";
import Login from "./Login.js";
import { useSpring, animated } from "react-spring";
import './App.css'

function App() {

  //css
  const [signup, setSignUp] = useState (false);

  function loginClicked() {setSignUp(false)};
  function signupClicked () {setSignUp(true)}



  return (
    <div className="login-signup-wrapper">
     <div className='nav-buttons'>
              <button
              onClick={loginClicked}
              id="loginBtn" className="active">Login</button>
              <button 
              onClick={signupClicked}
              id="signupBtn">Signup</button>
     </div>
     <div className="form-group">
      //wrap animation form
      <animated.form action="" id="loginform">
          <Login />
        </animated.form>
        <animated.form action="" id="loginform">
          <Signup />
        </animated.form>
     </div>
       <div className="forgot-panel"><a href="#">Forgot your password</a></div>
    </div>
  );
}

export default App;
