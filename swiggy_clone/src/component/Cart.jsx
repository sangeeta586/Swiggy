import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import CardItems from './CardItems';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
const Cart = () => {
    const [activeCart, setActiveCart] = useState(true);
    const cartItems = useSelector((state) => state.cart.cart);

    console.log(cartItems);

    return (
        <> 
                <div className={`fixed right-0 top-0 bg-white lg:w-[20vw] h-full w-full border-2 border-gray-200 mb-3 
                ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
                    <div className='flex p-5 justify-between font-bold'>                      
                        <span className='text-xl font-bold'>My Order </span>
                            <IoMdClose 
                                onClick={() => setActiveCart(!activeCart)} 
                                className='border-2 border-gray-600  w-8 hover:bg-red-600 cursor-pointer
                                font-bold  p-1 text-xl rounded-md  '
                            />                       
                    </div>
                    
                  {
                    cartItems.length > 0? (                       
                           cartItems.map((item) => {
                            return <CardItems key={item.id} item={item}   />
                           })
                       
                    ) : (
                        <h1 className='text-center text-xl'>Cart is Empty</h1>
                    )
                  }

                    <div className='absolute bottom-0 font-bold'>
                        <h1>Item :</h1>
                        <h1>Total amount : </h1>
                        <hr className='mt-2 border-1 border-black'/>
                        <button className='bg-green-400 rounded-lg p-2 hover:bg-green-600 cursor-pointer w-full mt-4 lg:w-[13vw]'>
                            Checkout
                        </button>
                    </div>
                    
                </div>
                <FaShoppingCart  onClick={() => setActiveCart(!activeCart)} className='bg-white rounded-full shadow-md text-5xl p-3 fixed bottom-10 right-4' />
        </>
    );
}

export default Cart;
