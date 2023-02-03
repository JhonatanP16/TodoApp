import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import LayoutRoutes from '../components/Utilities/LayoutRoutes';
import useDescriptionTitle from '../hooks/useDescriptionTitle';

const TaskOnly = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    const tasks = useSelector((state) => state.tasks.tasks);
    const [matchedTasks,setMatchedTasks] = useState([]);
    useEffect(()=> {
        const taskId = params.taskId;
        const filteredTask = tasks.filter((task) => task.id === taskId);
        if(!filteredTask){
            navigate('/');
        }
        setMatchedTasks(filteredTask);
    },[navigate,params.taskId,tasks]);
    const title = matchedTasks.length ? matchedTasks[0].title :'';
    useDescriptionTitle(`Searching fir ${title}`,"Task" + title);
  return (
    <LayoutRoutes tasks={matchedTasks} title={title}></LayoutRoutes>
  )
}

export default TaskOnly