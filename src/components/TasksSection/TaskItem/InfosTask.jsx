import React from 'react'
import useDate from '../../../hooks/useDate'
import { FaCalendar} from "react-icons/fa";
const InfosTask = ({task,isListInView1}) => {
  const dateFormated = useDate(task.date);
  
  return (
    <div className={`flex flex-col flex-1 justify-between`}>
        <div
        className={`flex items-center justifu-between ${
            isListInView1 ? 'mb-1' : 'mb-2'
        }`}>
            <span className='block font-medium dark:text-slate-200'>
                {task.title}
            </span>
        </div>
        <p
        title={task.description}
        className={`description mb-2 text-slate-500 dark:text-slate-500 ${
            isListInView1 ? 'line-clamp-2 sm:ine-clamp-1' : 'line-clamp-3'
        }`}>
            {task.description}
        </p>
        <time className='mt-auto flex w-full'>
         <FaCalendar className='mr-2 w-4 sm:w-5'/> {dateFormated}
        </time>
    </div>
  )
}

export default InfosTask