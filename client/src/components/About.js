import React from 'react'
import AboutNavBar from './AboutNavBar';
import './css/About.css'
// import nightsky from "../assets/nightsky.mp4";
import clouds from "../assets/clouds.mp4";


export default function About() {

    
  return (
    <>
      <AboutNavBar />
    <div className='about'>      
      <video autoPlay loop muted id="video">
      <source src={clouds} type="video/mp4" />
           </video>
           <div className='content'>
            <h1>National Parks Itinerary</h1>
            <br></br>
            <h2>What is it?</h2>
            <br></br>
            This webpage is for anyone who loves Nature or anyone interested in visiting National Parks.
            <br></br>
            A place where you can view different National Parks and be able to pick any Activities you'd like to add to your Itinerary List.
            <br></br>
            Each Itinerary List has it's own built in TODO list for better organization and planning needs.
            <br></br>
            <br></br>
            <br></br>
            <h2>How to get started?</h2>
            <br></br>
           1. Start on the Home Page<br></br>
           2. Select any Park <br></br>
           3. Choose an Activity and Add to Itinerary <br></br>
           4. Check Itinerary List <br></br>
           5. Start building out TODO List for each Activity. <br></br>
           6. Repeat, selecting any Park.
           <br></br>
           <br></br>
           <br></br>
           <h2>Misc.</h2>
           <br></br>
           Created with React, Rails, CSS, Material UI, and Love
        </div>
    </div>
    </>
  )
}
