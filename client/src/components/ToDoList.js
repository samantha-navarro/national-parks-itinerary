import React, { useState } from "react";
import ToDoContainer from "./ToDoContainer";
import ToDoHeader from "./ToDoHeader";
import ToDoForm from "./ToDoForm";
import "./css/ToDoList.css"
import data from "./css/data.json";



export default function ToDoList () {

    const [toDoList, setToDoList] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id == Number(id) ? { ...task, complete: !task.complete } : { ...task};
         })
         setToDoList(mapped);
    }

    const handleFilter = () => {
        let filter = toDoList.filter(task => {
            return !task.complete;
        })
        setToDoList(filter);
    }

    const addTask = (input) => {
        let list = [...toDoList];
        list = [...list, { id: toDoList.length + 1, task: input, complete: false }];
        setToDoList(list);
    }


    return (

        <div>
            <ToDoHeader />
            <ToDoContainer toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
            <ToDoForm addTask={addTask} />
        </div>
    )
}