import { createSlice } from "@reduxjs/toolkit";


const initialState ={
  items: [],
  toggle: false
}


  

export const cartSlice = createSlice({
  initialState,
  name: "cartSlice",

  reducers: {
    addToCart : (state, action) => {
     const findProduct = state.items.find(product => product.id === action.payload.id);
     if(findProduct){
          findProduct.quantity += 1;
     }else{
          const productClone = {...action.payload, quantity:1}
          state.items.push(productClone)
     }
    //  localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    deleteOneFromCart: (state, action) => {
      state.items.filter(product => product.id !== action.payload.id)
    
    },
    clearCart: (state) => {
      state.items= []

    },
    increaseQuanCart: (state, action) => {
     const productAdd = state.items.find(product => product.id === action.payload.id);
     productAdd.quantity++

},
    decreaseQuanCart: (state, action) => {
      const productdecrease = state.items.find(product => product.id === action.payload.id);
     productdecrease.quantity--
     if(productdecrease.quantity === 0){
     return state.items.filter(product => product.id !== action.payload.id)
     }

    },
    openCart : (state)=>{
      state.toggle =true
    },
    closeCart : (state)=>{
      state.toggle= false
    }

  },
});

export const {
  addToCart,
  deleteOneFromCart,
  clearCart,
  increaseQuanCart,
  decreaseQuanCart,
  closeCart,
  openCart
} = cartSlice.actions;
export default cartSlice.reducer;
