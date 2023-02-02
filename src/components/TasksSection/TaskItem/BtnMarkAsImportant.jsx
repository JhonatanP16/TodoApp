import React from 'react'
import { useDispatch } from 'react-redux'
import { FaStar} from "react-icons/fa";
import { tasksActions } from '../../../store/Tasks.store';
const BtnMarkAsImportant = ({taskImportant,taskId}) => {
  const dispatch = useDispatch();
  const markAsImportantHandler = () =>{
    dispatch(tasksActions.markAsImportant(taskId))
  }
  return (
    <button
    title={`taskImportant ? "unmark as important" : "mark as important"`}
    onClick={markAsImportantHandler}>
      <FaStar className={`w-5 h-5 sm:w-6 sm:h-6 ${
          taskImportant ? "fill-rose-500" : ""
        }`}/>
    </button>
  )
}

export default BtnMarkAsImportant