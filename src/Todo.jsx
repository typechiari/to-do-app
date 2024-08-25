import React, { useState } from 'react'
import "./styles/Todo.css"
import Task from "./Task"

const Todo = () => {
  const [tasks, setTasks] = useState([])
  const [newTaskText, setNewTaskText] = useState("")

  const handleInputChange = (event) => {
    setNewTaskText(event.target.value)
  }

  const addTask = () => {
    if (newTaskText.trim() !== "") {
      setTasks([...tasks, newTaskText])
      setNewTaskText("")
    }
  }

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div id='todo-app'>
      <h1>To Do List</h1>
      <div id='form-container'>
        <button id='add-button' onClick={addTask}>+</button>
        <input 
          type="text" 
          placeholder='Add your task'
          value={newTaskText}
          onChange={handleInputChange}
        />
      </div>
      <div id='task-container'>
        {tasks.map((task, index) => (
            <Task 
              key={index} 
              text={task} 
              deleteTask={() => deleteTask(index)} // Pasar la función de eliminación como prop
            />
          ))}
      </div>
    </div>
  )
}

export default Todo
