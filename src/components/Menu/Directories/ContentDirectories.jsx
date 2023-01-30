import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tasksActions } from '../../../store/Tasks.store';
import ModalDirectory from '../../Utilities/ModalDirectory';
import ItemDirectory from './ItemDirectory';

const ContentDirectories = ({classActive}) => {
  const directories = useSelector((state) => state.tasks.directories);
  const [modalDirIsShow,setModalDirIsShow] = useState(false);
  const dispatch = useDispatch();

  const createNewDirectoryHandler = (inputValue) => {
    const newDirectoryName = inputValue.trim();
    if(newDirectoryName.length === 0) return;
    
    const directoryDoesNotExist = directories.every(
      (dir) => dir !== newDirectoryName
    );
    if(directoryDoesNotExist){
      dispatch(tasksActions.createDirectory(newDirectoryName));
    }
  }

  const closeModalDirectoryHandler = () =>{
    setModalDirIsShow(false);
  }
  return (
   <>
    {
      modalDirIsShow && (
       <ModalDirectory
        onClose={closeModalDirectoryHandler}
        onConfirm={createNewDirectoryHandler}
        btnText="Create"
        title= "Create a New Directory"
       />
      )
    }
    <ul className='max-h-36 overflow-auto'>
        {
          directories.map((dir) => (
            <ItemDirectory key={dir} classActive={classActive} dir={dir}/>
          ))
        }
    </ul>
    <button
    onClick={()=>setModalDirIsShow(true)}
    className='px-3 py-1 border-slate-300  dark:border-slate-700 border-2 ml-9 mt-2  rounded-md border-dashed hover:text-violet-500'>
        + New
    </button>
   </>
  )
}

export default ContentDirectories