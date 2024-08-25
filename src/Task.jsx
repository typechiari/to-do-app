import React, { useState } from 'react'
import "./styles/Task.css"

const Task = ({ text, deleteTask }) => {
  const [CheckedClass, setCheckedClass] = useState("fa-regular")
  const [UnderlineClass, setUnderlineClass] = useState("none")
  const [CheckedColor, setCheckedColor] = useState("#494949")
  const [textColor, setTextColor] = useState("#cbcbcb")

  const toggleCheck = ()=> {
    setCheckedClass((prevClass) => (prevClass === "fa-regular" ? "fa-solid" : "fa-regular"))
    setUnderlineClass((prevClass) => (prevClass === "none" ? "line-through" : "none"))
    setCheckedColor((prevClass) => (prevClass === "#494949" ? "#3131FD" : "#494949"))
    setTextColor((prevClass) => (prevClass === "#cbcbcb" ? "#494949" : "#cbcbcb"))
  }

  return (
    <div id='task' onClick={toggleCheck}>
      <i class={`${CheckedClass} fa-circle`} style={{color: CheckedColor}}></i>
      <p id='p-task' style={{textDecoration: UnderlineClass, color: textColor}}>
        {text}
      </p>
      <button id='trash-button' onClick={deleteTask}>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>  
  )
}

export default Task
