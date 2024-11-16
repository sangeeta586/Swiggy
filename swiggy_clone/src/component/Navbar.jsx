import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
    return (
        <>
            <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6'>
                <div>
                    <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h3>
                    <h1 className='text-2xl font-bold' >Swiggy Food</h1>
                </div>
                <div className="relative w-full lg:w-[25vw]">
      <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input 
        type="search" 
        name="search" 
        id="search" 
        placeholder="Search here" 
        autoComplete="off"
        className="p-3 pl-10 pr-3 border border-gray-400 text-sm rounded-lg outline-none w-full"
      />
    </div>
            </nav>
        </>
    )
}

export default Navbar
