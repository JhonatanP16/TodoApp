import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Modal from "./Modal";
const ModalDirectory = ({onClose,onConfirm,dirName,btnText,title}) => {
    const directories = useSelector((state) => state.tasks.directories);
    const [errorDirectoryName,setErrorDirectoryName] = useState(false);
    const [newDirName,setNewDirName] = useState(dirName ? dirName : '');

    const checkDirNameExists = (val) => {
        const directoryDoesNotExist =  directories.every(
            (dir) => dir !== val
        );
        if(directoryDoesNotExist || dirName === val){
            setErrorDirectoryName(false);
        }else{
            setErrorDirectoryName(true);
        }

    };

    const confirmDirNameHandler = (e) => {
        e.preventDefault();
        if(errorDirectoryName) return;
        onConfirm(newDirName);
        onClose();
    }

  return (
    <Modal onClose={onClose} title={title}>
        <form className="stylesInputsField">
            <div className="relative">
                <label htmlFor="dir-name">
                    Title
                </label>
                <input 
                type="text"
                id="dir-name"
                placeholder="Enter new directory name"
                value={newDirName}
                onChange={({target}) => setNewDirName(target.value)}
                className={`inputStyles block w-full`}
                onInput={({currentTarget}) => checkDirNameExists(currentTarget.value)}
                />
                {
                    errorDirectoryName && (
                      <div className='absolute bg-rose-500 text-slate-200 rounded-md p-2 top-full text-sm w-full font-medium z-20'>
                        Directory name already exists
                      </div>
                    )
                }
            </div>
            <button className='btn mt-6' onClick={confirmDirNameHandler}>
                {btnText}
            </button>
        </form>
    </Modal>
  )
}

export default ModalDirectory