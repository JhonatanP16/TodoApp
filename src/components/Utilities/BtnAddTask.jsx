import React from 'react'
import { useDispatch } from 'react-redux'
import {modalActions} from '../../store/Modal.store'
const BtnAddTask = ({className}) => {

  const dispatch = useDispatch();
  const onOpenModal = () =>{
    dispatch(modalActions.openModalCreateTask())
  }
  return (
    <>
    <button className={`btn ${className}`} onClick={onOpenModal}>
        Add new Task
    </button>
    </>
  )
}

export default BtnAddTask