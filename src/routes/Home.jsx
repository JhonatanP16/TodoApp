import React from 'react'
import { useSelector } from 'react-redux'
import LayoutRoutes from '../components/Utilities/LayoutRoutes';
import useDescriptionTitle from '../hooks/useDescriptionTitle';
const Home = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  useDescriptionTitle("Organize your tasks","All Tasks")
  return (
    <LayoutRoutes title="All tasks" tasks={tasks}></LayoutRoutes>
  )
}

export default Home