import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import ContentDirectories from './ContentDirectories';
const Directories = ({classActive}) => {
    const [isDirectoriesOpen,setIsDirectoriesOpen] = useState(true)
    const toggleDirectoriesOpen = () =>{
        setIsDirectoriesOpen((prevState)=> !prevState)
    }
  return (
    <div className='py-4'>
        <button
        className={`flex items-center w-full mx-4 mb-2
        ${isDirectoriesOpen ? "dark:text-slate-200" : ""}`}
        onClick={toggleDirectoriesOpen}>
            <FaChevronRight
            className={`w-3 h3 mr-2 transition 
            ${isDirectoriesOpen ? 'rotate-90' : ''}`}
            />
            Directories
        </button>
        <div className={isDirectoriesOpen ? 'visible' : 'hidden'}>
         <ContentDirectories classActive={classActive}/>
        </div>
    </div>
  )
}

export default Directories