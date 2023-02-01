import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom'
import { tasksActions } from '../../../store/Tasks.store';
import ModalDirectory from '../../Utilities/ModalDirectory';
import { FaEdit, FaTrash} from "react-icons/fa";
import ModalConfirm from '../../Utilities/ModalConfirm';
const ItemDirectory = ({classActive,dir}) => {
   
    const route = useLocation();
    const currentPath = route.pathname;
    const dispatch = useDispatch();

    const [modalIsShown,setModalIsShown] = useState(false);
    const [modalDirIsShown,setModalDirIsShown] = useState(false);

    const closeModalDirectoryHandler= () =>{
        setModalDirIsShown(false);
    }

    const deleteDirectoryHandler = () => {
        dispatch(tasksActions.deleteDirectory(dir))
    }
    const confirmEditDirNameHandler = (dirName) => {
        dispatch(
            tasksActions.editDirectoryName({
                previousDirName: dir,
                newDirName: dirName,
            })
        )
    }
  return (
    <>
    {
        modalDirIsShown && (
            <ModalDirectory
             onClose={closeModalDirectoryHandler}
             onConfirm={confirmEditDirNameHandler}
             dirName={dir}
             title="Edit direcotry name"
             btnText="Edit"
            />
        )
    }
    {
        modalIsShown && (
            <ModalConfirm
            onClose={()=> setModalIsShown(false)}
            onConfirm={deleteDirectoryHandler}
            text="This directory and all its tasks will be delted"
            />
        )
    }
    <li
    className={`flex items-center pr-4 pl-9 py-2 itemDirectory ${currentPath
     === "/dir/" + dir  ? classActive : ""}`}
    >
        <NavLink
        to={`/dir/${dir}`}
        title={dir}
        className="hover:text-rose-600 dark:hover:text-slate-200 transition text-ellipsis whitespace-nowrap overflow-hidden max-w-[7rem]"
        >
            {dir}
        </NavLink>
        {
        dir !== "Main" && (
            <div className='ml-auto buttonsDir'>
                <button
                title='Edit directory name'
                onClick={()=> setModalDirIsShown(true)}>
                   <FaEdit  className="w-5 h-5 mr-2"/>
                </button>
                <button
                title='delete Directory'
                onClick={()=>setModalIsShown(true)}>
                    <FaTrash/>
                </button>
            </div>
        )
    }
    </li>
    </>
  )
}

export default ItemDirectory