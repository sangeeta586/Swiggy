import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {   
      const existItem = state.cart.find((item) => item.id === action.payload.id);    
     
      if (existItem) {
        state.cart = state.cart.map(item => 
          item.id === action.payload.id 
            ? { ...item, qty: item.qty + 1 } 
            : item
        );
      } else {        
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increamentQty : (state,action) => {
      state.cart = state.cart.map(item => item.id === action.payload.id ? {...item,qty:item.qty+1} : item)
    },
    decreamentQty : (state,action) => {
      state.cart = state.cart.map((item) => item.id === action.payload.id && item.qty>0 ? {...item,qty:item.qty-1} : item)
    }

  },
});

export const { addToCart, removeFromCart,increamentQty,decreamentQty } = CartSlice.actions; 
export default CartSlice.reducer;
