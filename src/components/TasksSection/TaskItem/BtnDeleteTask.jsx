import React, { useState } from 'react'
import {  FaTrash} from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { tasksActions } from '../../../store/Tasks.store';
import ModalConfirm from '../../Utilities/ModalConfirm';
const BtnDeleteTask = ({taskId}) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const dispatch = useDispatch()
  const removeTaskHandler = () =>{
    dispatch(tasksActions.removeTask(taskId))
  }
  return (
    <>
    {
      isModalShown && (
        <ModalConfirm
        onClose={()=> setIsModalShown(false)}
        text="This task will be deleted permanently."
        onConfirm={removeTaskHandler}
        />
      )
    }
    <button
    onClick={() => setIsModalShown(true)}
    title="delete task"
    className="ml-2 transition hover:text-slate-700 dark:hover:text-slate-200">
      <FaTrash className="w-5 h-5 sm:w-5 sm:h-5" />
    </button>
    </>
  )
}

export default BtnDeleteTask