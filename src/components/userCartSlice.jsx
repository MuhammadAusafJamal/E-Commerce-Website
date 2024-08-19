import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const fetchCart = async () => {
    // const dispatch = useDispatch();
    try {
        const response = await fetch(`https://fakestoreapi.com/carts`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data);
        dispatch(data)
        return data;
    } catch (error) {
        console.error('Error fetching cart data:', error);
    }
};

const UserCartSlice = createSlice({
    name: 'usercart',
    initialState: [],
    reducers: {
        deleteCarts(state, action) {
            fetch(`https://fakestoreapi.com/carts/${action.payload}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then((json) => { return json })

            console.log("chala")

        },
        addItemToCart(state, action) {
            state.push(action.payload);
        },
        deleteItemFromCart(state, action) {
            state = state.filter(item => item.id !== action.payload.id);
        },
        emptyCart() {
            return [];
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCart.pending, (state) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(fetchCart.fulfilled, (state, action) => {
    //             state.status = 'succeeded';
    //             state.carts = action.payload;  // Correctly update carts
    //         })
    //         .addCase(fetchCart.rejected, (state, action) => {
    //             state.status = 'failed';
    //             state.error = action.payload;
    //         });
    // }
});



export default UserCartSlice.reducer;
export const { addItemToCart, deleteItemFromCart, emptyCart, deleteCarts } = UserCartSlice.actions;
