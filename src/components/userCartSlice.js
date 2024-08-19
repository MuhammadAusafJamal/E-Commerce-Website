import {  createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

export const fetchCarts = async () => {
    try {
        const response = await fetch(`https://fakestoreapi.com/carts`);
        const data =  response.json();
        return data;
    } catch (error) {
        console.error('Error fetching cart data:', error);
    }
}

const UserCartSlice = createSlice({
    name: 'usercart',
    initialState: {
        carts: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        loadAllCarts(state, action) { 
            state.carts = action.payload
            // console.log("working" , action.payload)
        },
        addItemToCart(state, action) {
            state.carts.push(action.payload);
        },
        deleteItemFromCart(state, action) {
            state.carts = state.carts.filter(item => item.id !== action.payload.id);
        },
        emptyCart() {
            return { carts: [] };
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCarts.pending, (state) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(fetchCarts.fulfilled, (state, action) => {
    //             state.status = 'succeeded';
    //             state.carts = action.payload; // Correctly update carts
    //         })
    //         .addCase(fetchCarts.rejected, (state, action) => {
    //             state.status = 'failed';
    //             state.error = action.payload;
    //         });
    // }
});

export default UserCartSlice.reducer;
export const { addItemToCart, deleteItemFromCart, emptyCart, loadAllCarts } = UserCartSlice.actions;