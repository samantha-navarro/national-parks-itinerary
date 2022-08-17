import React, { useState } from "react";
import "./css/ToDoItinerary.css"

export default function ToDoItinerary () {

     const [input, setInput] = useState("");
     const [todos, setTodos] = useState([]);

     const onInputChange = (e) => {
        setInput(e.target.value);
     }

    //  const onFormSubmit = (e) => {
    //     e.preventDefault()
    //     setTodos9([...todos, ])
    //  }

    return (
        <div className="contain">
            <div className="app-wrapper">
                <div>
                    <h1>Todo-List</h1>
                <div className="header">
                </div>
                <div>
                    <form>
                        <input type="text" placeholder="Enter a Todo ..." className="task-input"
                        value={input}
                        required
                        onChange={onInputChange}
                        />
                        <button className="button-add">Add</button>
                    </form>
                    
                </div>
                </div>
            
            </div>

        </div>
    )
}