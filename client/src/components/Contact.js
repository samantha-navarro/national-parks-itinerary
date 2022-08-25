import React from 'react'
import AboutNavBar from './AboutNavBar';
import clouds from "../assets/clouds.mp4";

export default function Contact() {
  return (
    <>
    <AboutNavBar />
    <div>
      <video autoPlay loop muted id="video">
      <source src={clouds} type="video/mp4" />
            </video>
    </div>
    </>
  )
}
