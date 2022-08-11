import React from "react";
import "./Signup.css";

export default function Signup () {

    return (
        <form action="" id="signupform">
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" />
            <label for="username">Username</label>
            <input type="text" id="username" />
            <label for="email">Email</label>
            <input type="text" id="email" />
            <label for="password">Password</label>
            <input type="text"  id="password"/>
            <input type="submit" value="submit" class="submit" />
        </form>
    )
}