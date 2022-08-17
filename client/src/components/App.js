import React, { useEffect, useState } from "react";
import Activities from "./Activities.js";
import Parks from "./Parks.js";
import Itinerary from "./Itinerary.js";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import ToDoItinerary from "./ToDoItinerary.js";

function App() {
  //set our logged in user with login or signup
  const [currentUser, setCurrentUser] = useState(false)

  //fetch the logged in user when app loads if there is a user
  useEffect(() => {
    fetch("/main")
    .then(res => res.json())
    .then((user) => {
      setCurrentUser(user)
    })
  }, []);


  return (
    <div>
      
      <Routes>
        <Route path={currentUser ? "/main" : "/"} element={currentUser ? <MainPage currentUser={currentUser}/> : <LoginPage setCurrentUser={setCurrentUser}/>} />

        <Route path="/" element={<LoginPage setCurrentUser={setCurrentUser}/>}/>

        <Route path="/signup" element={<SignupPage setCurrentUser={setCurrentUser}/>} />

        <Route path="/main" element={<MainPage/>} />

        <Route path="/parks" element={<Parks/>} />

        <Route path="/activities" element={<Activities/>} />

        <Route path="/itinerary" element={<Itinerary />} />

        <Route path="/todo" element={<ToDoItinerary />} />

      </Routes>


   
    </div>
  );
}

export default App;