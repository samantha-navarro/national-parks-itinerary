import React, { useState } from "react";

 const defaultSignupValues = {
    username: "",
    full_name: "",
    password: ""
 };

export default function Signup (setCurrentUser) {

const [formData, setFormData] = useState(defaultSignupValues)
const [errors, setErrors] = useState ([]);

// use navigate = useNavigate();

    return (
        <React.Fragment>
            <form action="" id="signupform">
            <label for="fullname">Full Name</label>
            <input type="text" id="fullname" />
            <label for="username">Username</label>
            <input type="text" id="username" />
            <label for="password">Password</label>
            <input type="password"  id="password"/>
            <input type="submit" value="submit" class="submit" />
            </form>
        // </React.Fragment>
    )
}