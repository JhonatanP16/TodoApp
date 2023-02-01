import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useDate from '../../hooks/useDate';
import { FaSearch} from "react-icons/fa";
const ItemSearch = () =>{
  const dateFormated = useDate;
  return(
    <li>
      <Link
      to={`/task/`}
      className="flex justify-between transition hover:text-rose-500 dark:hover:text-slate-200"
      >
      <span>Task 1</span>
      <span>{dateFormated}</span>
      </Link>
    </li>
  );
};

const SearchField = () => {
  const navigate = useNavigate();
  const searchResultsRef = useRef(null);
  const [searchInputValue,setSearchInputValue] = useState("");

  return (
    <div className="flex-1 col-span-3 row-start-2 md:pr-10">
      <form className='relative md:max-w-xs w-full' autoComplete='off'>
        <label htmlFor="search" className='sr-only'></label>
        <input 
        type="search" 
        id='search'
        placeholder='Search Task'
        className='inputStyles w-full'
        />
        <FaSearch className='absolute w-4 sm:w-5 right-4 top-3.5 text-slate-400 '/>
      </form>
    </div>
  )
}

export default SearchField