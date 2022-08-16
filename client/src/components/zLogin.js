import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultLoginValues = {
    username: "",
    password: "",
}

export default function Login (setCurrentUser) {

//login values
const [loginValues, setLoginValues] = useState(defaultLoginValues);

const navigate = useNavigate()

const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginValues ({
        ...loginValues,
        [name]: value,
    })
};

const handleLoginSubmit = (e) => {
    e.preventDefault();

const configObj = {
    method: "POST",
    headers: {
        "content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({ ...loginValues }),
};


fetch("/", configObj)
.then(res => {
    if(res.ok) {
        return res.json();
    }
    throw new Error('Incorrect Username or Password. Try Again!');
})
.then((user) => {
    //set the state of the user
    setCurrentUser(user)
    //route user to their mainpage
    navigate("/main")
})
.catch((error) => {
    alert(error)
})
setLoginValues(defaultLoginValues)
};

    return (
        <React.Fragment>
            <form action="" id="loginform">
            <label for='username'>Username</label>
            <input 
            id="username"
            name="username"
            value={loginValues.username} 
            onChange={handleLoginChange} 
            type="text" 
             />
            <label for="password">Password</label>
            <input 
            id="password"
            name="password"
            value={loginValues.password}
            onChange={handleLoginChange}
            type="password" 
             />
            <input 
            onClick={handleLoginSubmit}
            type="submit" 
            value="submit" 
            className="submit" />
            </form>
        </React.Fragment>
    )
}