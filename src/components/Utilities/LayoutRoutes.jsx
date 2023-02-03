import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { modalActions } from '../../store/Modal.store';
import ButtonsSort from '../TasksSection/ButtonsSort';
import TaskItem from '../TasksSection/TaskItem/TaskItem';
import useSortTask from '../../hooks/useSortTask'

const LayoutRoutes = ({title,tasks}) => {
    const [isListInView1, setIsListInView1] = useState(false);
    const dispatch = useDispatch();
    const openModalHandler = () => {
        dispatch(modalActions.openModalCreateTask())
    }
    const taskTitle = `${title} (${tasks.length} ${tasks.length === 1 ? 'task' :'tasks'})`
    const { sortedBy, setSortedBy, sortedTasks } = useSortTask(tasks);
  return (
    <section>
        <h1 className='font-medium my-5 text-center sm:text-left sm:my-8 md:text-2xl text-lg dark:text-slate-200'>
         {taskTitle}
        </h1>
        <ButtonsSort
        isListInView1={isListInView1}
        setIsListInView1={setIsListInView1}
        sortedBy={sortedBy}
        setSortedBy={setSortedBy}
        />

        <ul
        className={`tasksList mt-4 grid gap-2 sm:gap-4 xl:gap-6 ${
            isListInView1
            ? 'grid-cols-1'
            : '2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end'
        }`} 
        >
           {sortedTasks.map(task => (
            <TaskItem key={task.id} isListInView1={isListInView1} task={task}/>
             )
           )}
           <li>
            <button
            onClick={openModalHandler}
            className={`border-2 border-slate-300
            text-slate-400 w-full rounded-lg
             border-dashed transition hover:bg-slate-300
              hover:text-slate-500
              dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300${
                isListInView1 ? "h-20 sm:h-32" : "h-52 sm:h-64"
              }`}>
             Add new Task
            </button>
           </li>
        </ul>
    </section>
  )
}

export default LayoutRoutes