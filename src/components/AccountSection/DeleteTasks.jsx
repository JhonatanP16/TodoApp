import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ModalConfirm from '../Utilities/ModalConfirm'
import {tasksActions} from '../../store/Tasks.store';
const DeleteTasks = () => {
    const dispatch = useDispatch();
    const [showModal,setShowModal] = useState(false);
     
    const deleteAllData = () =>{
        dispatch(tasksActions.deleteAllData())
    }
  return (
    <>
    {
        showModal && (
        <ModalConfirm
        onClose={()=>setShowModal(false)}
        text={"All data wiil be deleted permanently"}
        onConfirm={deleteAllData}/>
        )
    }
    <button
     className='mt-auto text-left pt-4 hover:text-rose-600 dark:hover:text-slate-200 transition'
     onClick={()=> setShowModal(true)}>
        Delete all data
    </button>
    </>
  )
}

export default DeleteTasks