import React, { useState } from 'react'
import {FaEdit} from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { tasksActions } from '../../../store/Tasks.store';
import ModalCreateTask from '../../Utilities/ModalTask';
const BtnEditTask = ({task}) => {
  const [modalEditTaskOpen, setModalEditTaskOpen] = useState(false);
  const dispatch = useDispatch();
  const closeModalEditTask = () => {
    setModalEditTaskOpen(false);
  }
  const openModalEditTask = () =>{
    setModalEditTaskOpen(true);
  }
  const editTaskHandler = (task) =>{
    dispatch(tasksActions.editTask(task))
  }
  return (
    <>
    <button
    title='Edit Task'
    onClick={openModalEditTask}
    className='transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center dark:hover:text-slate-200 hover:text-slate-700'
    >
      <FaEdit className='sm:w-5 sm:h-5'/>
    </button>
    {
      modalEditTaskOpen && (
        <ModalCreateTask
        onClose={closeModalEditTask}
        task={task}
        nameForm="Edit task"
        onConfirm={editTaskHandler}
        />
      )
    }
    </>
  )
}

export default BtnEditTask