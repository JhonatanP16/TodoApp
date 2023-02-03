import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LayoutRoutes from '../components/Utilities/LayoutRoutes'
import useDescriptionTitle from '../hooks/useDescriptionTitle';

const ImportantTask = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const [importantTasks, setImportantTasks] = useState([]);
    useEffect(()=>{
        const filteredTasks = tasks.filter((task) => task.important);
        setImportantTasks(filteredTasks);
    },[tasks])
    useDescriptionTitle('Important Task','Important Task')
  return (
    <LayoutRoutes title='Important Tasks' tasks={importantTasks}></LayoutRoutes>
  )
}

export default ImportantTask