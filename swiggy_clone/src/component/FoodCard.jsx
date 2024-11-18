import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

const FoodCard = ({ food }) => {
    const dispatch = useDispatch();
     
    return (
        <div className='font-bold border-2 bg-white p-5 flex flex-col rounded-lg w-full h-[500px]'>
            <div className='w-full h-[400px] overflow-hidden'>
                <img
                    src={food.img}
                    alt={food.name}
                    className='w-full h-full object-cover hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'
                />
            </div>

            <div className='flex text-lg py-3 text-center justify-between gap-7'>
                <h2>{food.name}</h2>                                                                                                                                                                           
                <span className='flex text-green-500'>
                    <FaRupeeSign className='mt-1' />{food.price}
                </span>
            </div>
            <p className='text-sm font-normal pb-3 line-clamp-2'>{food.desc}</p>
            <div className='flex justify-between mt-4'>
                <span className='flex items-center'>
                    <IoIosStar className='text-yellow-500 mr-1' />{food.rating}
                </span>
                <button 
                    onClick={() => dispatch(addToCart(food))}   
                    className='bg-green-400 font-white rounded-lg w-32 py-3 text-sm hover:bg-lime-500'>
                    Add to Cart                                                        
                </button>
            </div>
        </div>
    )
}

export default FoodCard;
