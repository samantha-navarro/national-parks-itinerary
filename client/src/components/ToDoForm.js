import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { useInRouterContext } from 'react-router-dom';

export default function ToDoForm({ addTask }) {
    const [input, setInput] = (useState(''));

    const handleChange = (e) => {
        setInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            value={input} 
            type="text"
            onChange={handleChange}
            placeholder="What will you need?"/>
        <button style ={{margin: "20px"}}>Submit</button>
      </form>
    </div>
  )
}