import React from 'react'
import LayoutMenus from '../Utilities/LayoutMenus'
import Avatar from '../../assets/avatar.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { menusActions } from '../../store/Menu.store'
const AccountData = () => {
  const menuOpen = useSelector((state) => state.menu.menuAccountOpened);
  const dispatch = useDispatch();

  const closeMenuHandler = () =>{
    dispatch(menusActions.closeMenuAccount());
  }
  return (
    <LayoutMenus
    menuOpen={menuOpen}
    closeMenuHandler={closeMenuHandler}
    className="top-0 right-0"
    >
        <section className='p-5 flex flex-col h-full'>
        <span className='flex items-center mx-auto'>
            <span className='font-medium'>Hi, User</span>
            <img src={Avatar} alt=""  className='rounded-full w-10 h-10 ml-4'/>
        </span>
        
        <a 
        href="https://github.com/aridsm"
        className='mt-4 bg-rose-100 p-2 rounded-md text-rose-600 text-center transition hover:bg-rose-200 dark:bg-slate-700/[.3] dark:text-slate-200'>
            Project Copy for Practice
        </a>
        </section>
    </LayoutMenus>
  )
}

export default AccountData