import React from 'react'
import { FaBell} from "react-icons/fa";
const Notification = () => {
  return (
    <div className='sm:mr-4 md:mr-6 ml-auto grid place-items-center relative'>
        <button
        className={`relative`}
        title='see notifications'
        >
         <FaBell className='fill-violet-600 w-5 h-5 md:w-6 md:h-6 dark:fill-violet-800'/>
        </button>
    </div>
  )
}

export default Notification