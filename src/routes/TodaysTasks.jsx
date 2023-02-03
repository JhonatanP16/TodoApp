import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LayoutRoutes from '../components/Utilities/LayoutRoutes'
import useDescriptionTitle from '../hooks/useDescriptionTitle';

const TodaysTasks = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const [todayTasks,setTodayTasks] = useState([]);
    const date = new Date();
    const year = date.getFullYear();
    const month= date.getMonth() + 1;
    const day = date.getDate();
  
    const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;

    useEffect(()=>{
        const filteredTasks = tasks.filter((task) => task.date === dateTimeFormat);
        setTodayTasks(filteredTasks);
    },[tasks,dateTimeFormat])
    useDescriptionTitle('Today Task','Today Task')
  return (
    <LayoutRoutes title='Todays Tasks' tasks={todayTasks}></LayoutRoutes>
  )
}

export default TodaysTasks