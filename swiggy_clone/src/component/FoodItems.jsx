import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../../FoodData'
const FoodItems = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {
        FoodData.map(food =>(
           
             <FoodCard key={food.id} food={food} />
          
        ))
      }
      </div>
  )
}

export default FoodItems
