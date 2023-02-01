import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../../routes/Home'
import HeaderTasks from './HeaderTasks'

const TasksSection = () => {
  return (
    <main className='pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen'>
        <HeaderTasks/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Navigate to=""/>}/>
        </Routes>
    </main>
  )
}

export default TasksSection