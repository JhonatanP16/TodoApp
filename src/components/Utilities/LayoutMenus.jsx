import React from 'react'

const LayoutMenus = ({children,className}) => {
  return (
    <>
    <div className={`bg-slate-100 h-screen w-60 xl:w-2/12 fixed dark:bg-slate-800 z-20  ${className}`}>
        {children}
    </div>
    </>
  )
}

export default LayoutMenus