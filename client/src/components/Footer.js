import React from "react";
import { FaMailBulk, FaLinkedin } from "react-icons/fa";

export default function Footer () {

    return(
        <div className="footer">
            <div className='footer-container'>
                <div className="left">
                        <div className="github">
                    (add icon here)
                        <div>
                            <p>(https://github.com/samantha-navarro)</p>
                        </div>
                        <div className="blog">
                            <h4> insert icon (insert blog link)</h4>
                        </div>
                        <div className="email">
                            <h4><FaMailBulk size={20} style={{ color: "black", marginRight: '2rem' }}/>samantha.m.navarro@gmail.com</h4>
                        </div>
                    </div>
                <div className="right">
                    <h4>About the Website Page</h4>
                    <p>info here</p>
                <div className="social">
                    <FaLinkedin size={20} style={{ color: "black", marginRight: '2rem' }} /> https://www.linkedin.com/in/samantha-m-navarro/
                </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}