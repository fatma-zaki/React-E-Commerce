import { createSlice } from "@reduxjs/toolkit";
//add the alert messages
import { toast } from "react-toastify";

const initialState = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  toggle: false,
};

export const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.items.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
        toast.info(
          `increased ${action.payload.title.substring(0, 20)}... quantity`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.items.push(productClone);
        toast.success(
          `added ${action.payload.title.substring(0, 20)}... to cart`,
          {
            position: "bottom-left",
          }
        );
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      //  localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    deleteOneFromCart: (state, action) => {
      const filterdItems = state.items.filter(
        (product) => product.id !== action.payload.id
      );
      state.items = filterdItems;
      localStorage.setItem("cartItems", JSON.stringify(filterdItems));
      toast.error(
        `removed ${action.payload.title.substring(0, 20)}... from cart`,
        {
          position: "bottom-left",
        }
      );
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify(state.items));

    },
    increaseQuanCart: (state, action) => {
      const productAdd = state.items.find(
        (product) => product.id === action.payload.id
      );
      productAdd.quantity++;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      toast.info(
        `increased ${action.payload.title.substring(0, 20)}... quantity`,
        {
          position: "bottom-left",
        }
      );
      
    },
    decreaseQuanCart: (state, action) => {
      const productdecrease = state.items.find(
        (product) => product.id === action.payload.id
      );
      productdecrease.quantity--;
      toast.info(
        `decreased ${action.payload.title.substring(0, 20)}... quantity`,
        {
          position: "bottom-left",
        }
      );
      if (productdecrease.quantity === 0) {
        const filterdItems = state.items.filter(
          (product) => product.id !== action.payload.id
        );
        state.items = filterdItems;
        toast.error(
          `removed ${action.payload.title.substring(0, 20)}... quantity`,
          {
            position: "bottom-left",
          }
        );

      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));

    },
    openCart: (state) => {
      state.toggle = true;
    },
    closeCart: (state) => {
      state.toggle = false;
    },
  },
});

export const {
  addToCart,
  deleteOneFromCart,
  clearCart,
  increaseQuanCart,
  decreaseQuanCart,
  closeCart,
  openCart,
} = cartSlice.actions;
export default cartSlice.reducer;
