import React from 'react'

const BtnAddTask = ({className}) => {
  return (
    <>
    <button className={`btn ${className}`}>
        Add new Task
    </button>
    </>
  )
}

export default BtnAddTask