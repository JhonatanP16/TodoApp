import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
    {
      name:"Today task",
      path:"/today"
    },
    {
      name:"All task",
      path:"/"
    },
    {
      name:"Important task",
      path:'important'
    },
    {
        name: "Completed tasks",
        path: "/completed",
    },
    {
        name: "Uncompleted tasks",
        path: "/uncompleted",
    },
]
const NavLinks = ({classActive}) => {
  const currentPath = "/today";
  return (
    <nav>
        <ul className='grid gap-2'>
            {links.map((link) => (
                <p
                className={`px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 
                ${currentPath === link.path ? classActive : ''}`}
                key={link.path}
                >
                    {link.name}
                </p>
            ))}
        </ul>
    </nav>
  )
}

export default NavLinks