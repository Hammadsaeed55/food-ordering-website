// import { createSlice } from "@reduxjs/toolkit";

// const CartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         cart: [],
//     },
//     reducers: {
//         addToCart: (state, action) => {
//             const existingItem = state.cart.find((item)=>item.id === action.payload.id);
//             if(existingItem){
//              state.cart = state.cart.map((item)=>item.id === action.payload.id?{...item, qty: item.qty+1} : item);
//             }
//             else{
//                 state.cart.push(action.payload)
//             }
//             state.cart.push(action.payload); // Just push the item to the cart
//         },
//         removeFromCart: (state, action) => {
//             state.cart = state.cart.filter((item) => item.id !== action.payload.id);
//         },
//     },
// });

// export const { addToCart, removeFromCart } = CartSlice.actions;
// export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) {
                state.cart = state.cart.map((item) =>
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
        increamentQty : (state, action)=>{
            state.cart = state.cart.map((item)=>item.id === action.payload.id ? {...item, qty: item.qty + 1} : item
            )
        },
        decreamentQty : (state, action)=>{
            state.cart = state.cart.map((item)=>item.id === action.payload.id ? {...item, qty: item.qty - 1} : item
            )
        },
    },
});

export const { addToCart, removeFromCart, increamentQty, decreamentQty } = CartSlice.actions;
export default CartSlice.reducer;
