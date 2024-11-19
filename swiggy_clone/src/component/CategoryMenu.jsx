import React, { useState, useEffect } from 'react'
import FoodData from '../../FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';

const CategoryMenu = () => {

  const [categories, setcategories] = useState([]);

  const uniqueCategories = [...new Set(FoodData.map((item) => (item.category)))]

  useEffect(() =>
    setcategories(uniqueCategories)
  )

  const dispatch = useDispatch()
  const selectedCategory = useSelector((state) => state.category.category)
  return (
    <div className='ml-6'>
      <h3 className='text-xl font-semibold ml-9 '>Find the best food</h3>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden '>
      <button
              onClick={() => dispatch(setCategory("All"))}
              className={`px-3 py-2 bg-gray-200 font bold rounded-lg
               hover:bg-green-500 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"} `}>All</button>
        {
          categories.map((category) =>
            <button
              onClick={() => dispatch(setCategory(category))}
              className={`px-3 py-2 bg-gray-200 font bold rounded-lg
               hover:bg-green-500 hover:text-white ${selectedCategory === category && "bg-green-500 text-white"} `}>{category}</button>
          )
        }

      </div>
    </div>
  )
}

export default CategoryMenu
