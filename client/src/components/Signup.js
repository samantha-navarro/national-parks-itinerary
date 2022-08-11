import React from "react";


export default function Signup () {

    return (
        <React.Fragment>
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" />
            <label for="username">Username</label>
            <input type="text" id="username" />
            <label for="email">Email</label>
            <input type="text" id="email" />
            <label for="password">Password</label>
            <input type="password"  id="password"/>
            <input type="submit" value="submit" class="submit" />
        </React.Fragment>
    )
}