import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import LayoutRoutes from '../components/Utilities/LayoutRoutes'
import useDescriptionTitle from '../hooks/useDescriptionTitle';

const DoneTasks = ({done,title}) => {
    const tasks = useSelector((state)=>state.tasks.tasks);
    const [doneTasks, setDoneTasks] = useState([]);
    useEffect(()=>{
        const filterTaks = tasks.filter((task) => task.completed === done)
        setDoneTasks(filterTaks);
    },[tasks,done])
    useDescriptionTitle(`${title}`,`${title}`);
  return (
    <LayoutRoutes title={title} tasks={doneTasks}></LayoutRoutes>
  )
}

export default DoneTasks