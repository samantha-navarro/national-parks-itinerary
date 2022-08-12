import React, { useState } from "react";
import FirstPage from "./FirstPage";
import Activities from "./Activities.js";
import Parks from "./Parks.js";
import Itinerary from "./Itinerary.js";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";




function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/main" element={<MainPage/>} />
        <Route path="/parks" element={<Parks/>} />
        <Route path="/activities" element={<Activities/>} />
        {/* <Itinerary/> */}
      </Routes>


   
    </div>
  );
}

export default App;