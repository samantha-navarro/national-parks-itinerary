import React from "react";


export default function Login () {

    return (
        // <form action="" id="loginform">
        <React.Fragment>
            <label for='username'>Username</label>
            <input type="text" id="username" />
            <label for="password">Password</label>
            <input type="password" id="password" />
            <input type="submit" value="submit" className="submit" />
        </React.Fragment>
    )
}