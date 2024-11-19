import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../../FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
const FoodItems = () => {

const category = useSelector((state) => state.category.category)
const search = useSelector((state) => state.search.search)
  
  const handleToast =(name) => {
    toast.success(`${name} Added to cart successfully!`, {
      position: 'top-center',
      duration: 3000,
    });
  }

  return (
    <>
    <Toaster position="top-center"  reverseOrder={false} />
    <div className='grid grid-cols-4 gap-4'>
      {
       FoodData.filter((food) =>      
       {        
           if(category === "All"){
              return food.name.toLowerCase().includes(search.toLowerCase());
           }
           else{
             return food.category === category && food.name.toLowerCase().includes(search.toLowerCase());
           }      
      }      
      ).map((food) =>
        <FoodCard key={food.id} food={food} handleToast={handleToast} />
      ) 
      }
      </div>
    </>
  )
}

export default FoodItems
// FoodData.map(food =>(
           
//   <FoodCard key={food.id} food={food} handleToast={handleToast} />

// ))