import React from 'react'
import { useDispatch } from 'react-redux'
import { tasksActions } from '../../../store/Tasks.store';
import { FaCheck, FaMarker} from "react-icons/fa";
const BtnToggleCompleted = ({isListInView1,taskId,taskCompleted}) => {
  const dispatch = useDispatch();
  const toggleTaskCompleted = (id) => {
    dispatch(tasksActions.toggleTaskCompleted(id))
  }
  return (
    <button
    title={taskCompleted ? "mark as uncompleted" : 'mark as completed'}
    className={`${
      taskCompleted 
      ? "bg-emerald-200 text-emerald-800"
      : 'bg-amber-200 text-amber-800'
    }${isListInView1 ? "mr-4" : "mr-4 order-0"} rounded-full font-medium`}
    onClick={()=> toggleTaskCompleted(taskId)}
    >
      <span className='block py-1 px-3 absolute invisible sm:static sm:visible'>
      {taskCompleted ? 'Completed' :'uncompleted'}
      </span>
      <span className='sm:hidden w-6 h-6 grid place-items-center'>
        {
          taskCompleted ? (
            <FaCheck className="w-3 h-3"/>
          )
          : (
            <FaMarker className="w-3 h-3"/>
          )
        }
      </span>
    </button>
  )
}

export default BtnToggleCompleted