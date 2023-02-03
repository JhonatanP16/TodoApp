import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DoneTasks from '../../routes/DoneTasks'
import Home from '../../routes/Home'
import ImportantTask from '../../routes/ImportantTask'
import TodaysTasks from '../../routes/TodaysTasks'
import HeaderTasks from './HeaderTasks'

const TasksSection = () => {
  return (
    <main className='pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen'>
        <HeaderTasks/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Navigate to=""/>}/>
            <Route path='/today' element={<TodaysTasks/>}/>
            <Route path='/important' element={<ImportantTask/>}/>
            <Route path='/completed'  element={<DoneTasks done={true} title='Completed Task'/>}/>
            <Route path='/uncompleted'  element={<DoneTasks done={false} title='Uncompleted Task'/>}/>
        </Routes>
    </main>
  )
}

export default TasksSection