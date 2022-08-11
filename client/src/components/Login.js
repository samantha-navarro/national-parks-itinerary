import React from "react";
import "./Login.css";

export default function Login () {

    return (
        <form action="" id="loginform">
            <label for='username'>Username</label>
            <input type="text" id="username" />
            <label for="password">Password</label>
            <input type="text" id="password" />
            <input type="submit" value="submit" className="submit" />
        </form>
    )
}