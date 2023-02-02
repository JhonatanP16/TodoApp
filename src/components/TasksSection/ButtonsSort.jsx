import React from 'react'
import { FaList, FaThLarge} from "react-icons/fa";
const ButtonsSort = ({isListInView1,setIsListInView1,sortedBy,setSortedBy}) => {
    const sortValues = [
        {vale:"order-added", title:'Order added'},
        { value: "min-date", title: "Earlier first" },
        { value: "max-date", title: "Later first" },
        { value: "completed-first", title: "Completed first" },
        { value: "uncompleted-first", title: "Uncompleted first" },
    ]
  return (
    <div className='flex children-styles'>
        <button onClick={()=> setIsListInView1(true)} title="view in list">
            <FaList className={isListInView1 ? "text-violet-600" : ''}/>
        </button>
        <button onClick={()=> setIsListInView1(false)} title='view in grid'>
            <FaThLarge className={!isListInView1 ? 'text-violet-600' : ''}/>
        </button>
    </div>
  )
}

export default ButtonsSort