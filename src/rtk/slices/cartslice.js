import { createSlice } from "@reduxjs/toolkit";


const initialState = []


export const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    addToCart : (state, action) => {
     const findProduct = state.find(product => product.id === action.payload.id);
     if(findProduct){
          findProduct.quantity += 1;
     }else{
          const productClone = {...action.payload, quantity:1}
          state.push(productClone)
     }
    },
    deleteOneFromCart: (state, action) => {
     return state.filter(product => product.id !== action.payload.id)
    },
    clearCart: () => {
     return []
    },
    increaseQuanCart: (state, action) => {
     const productAdd = state.find(product => product.id === action.payload.id);
     productAdd.quantity += 1
},
//     decreaseQuanCart: (state, action) => {},
  },
});

export const {
  addToCart,
  deleteOneFromCart,
  clearCart,
  increaseQuanCart,
//   decreaseQuanCart,
} = cartSlice.actions;
export default cartSlice.reducer;
