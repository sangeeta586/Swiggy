import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from '../redux/slices/CartSlice';
import { useDispatch } from 'react-redux';
const CardItems = ({item}) => {
 const dispatch = useDispatch()

    return (
        <div className='flex gap-2 shadow-md p-2 mb-3'>
            <MdDelete onClick={() =>dispatch( removeFromCart(item))} className='absolute right-0' />
            <img src={item.img} className='w-[50px] h-[50px]' />
            <div className=''>
                <span className='font-bold'>{item.name} </span>
                <div className='flex justify-between'>
                    <span className='text-green-500  font-bold'>₹{item.price}</span>
                    <div className='flex justify-center items-center gap-2 absolute  right-4 '>
                        <IoMdAdd onClick={(i) => i.qty + 1} className='border border-gray-200  w-5 h-5 rounded hover:bg-green-400 hover:border-none cursor-pointer ' />
                        <span className='p-1'>{item.qty}</span>
                        < FiMinus className='border border-gray-200 w-5 h-5 rounded hover:bg-green-400 hover:border-none cursor-pointer' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardItems
           