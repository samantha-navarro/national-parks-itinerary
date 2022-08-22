import React from 'react'
import ToDo from "./ToDo.js";

export default function ToDoContainer({ toDoList, handleToggle, handleFilter }) {
  return (
    <div>
      {toDoList.map(todo => {
        return(<ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
        )
      })}
      <button style ={{margin: "20px"}} onClick={handleFilter}>Clear Completed</button>
    </div>
  )
}