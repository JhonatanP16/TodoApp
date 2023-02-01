import React from 'react'
import { useDispatch } from 'react-redux'
import { menusActions } from '../../store/Menu.store';
import { FaAlignLeft} from "react-icons/fa";
import SearchField from './SearchField';
import BtnAddTask from '../Utilities/BtnAddTask';
import Avatar from '../../assets/avatar.jpg'
import Notification from './Notification';
const HeaderTasks = () => {
    const dispatch = useDispatch();
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const monthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Agoust",
        "september",
        "Octuber",
        "November",
        "December"
    ]
    const todayDate = `${year}, ${monthName[month].slice(0,3)} ${day.toString().padStart(2,"0")}`;
    const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`;

    const openMenuHeaderHandler = () => {
        dispatch(menusActions.openMenuHeader());
    }
    const openMenuAccountHandler = () =>{
        dispatch(menusActions.openMenuAccount());
    }
  return (
    <header className='items-center grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 md:flex'>
        <button
        className='mr-6 block xl:hidden'
        onClick={openMenuHeaderHandler}
        title="open Menu"
        >
            <FaAlignLeft/>
        </button>
        <SearchField/>
        <div className='text-center'>
            <span className='text-slate-600 dark:text-slate-200 uppercase font-bold text-sm block xl:hidden'>
                To-do List
            </span>
            <time dateTimeFormat={dateTimeFormat}>{todayDate}</time>
        </div>
        <div className='flex flex-1'>
            <Notification/>
            <BtnAddTask className="sm:static fixed bottom-3 right-3 z-10 sm:z-0 min-w-max shadow-lg shadow-slate-400  dark:shadow-slate-900 sm:shadow-transparent"/>
            <button onClick={openMenuAccountHandler} className='block xl:hidden'>
                <img 
                src={Avatar}
                alt="Avatar"
                className='rounded-full ml-4 w-10 h-10'/>
            </button>
        </div>
    </header>
  )
}

export default HeaderTasks