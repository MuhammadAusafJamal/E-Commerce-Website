import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cart: [],
    items: await fetchProducts(),
    totalQuantity: 0,
    totalPrice: 0,
};

const fetchProducts = async () => {
    try {
        const response = await fetch(`https://66c4499eb026f3cc6ceeb0aa.mockapi.io/products`);
        const data = response.json();
        return data;
    } catch (error) {
        console.error('Error fetching cart data:', error);
    }
}

const UserCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            console.log(action.payload)
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push(action.payload);
            }
        },

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("cart total", cartTotal);
                    console.log("cart item", cartItem);
                    const { price, quantity } = cartItem;
                    console.log(price, quantity);
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseFloat(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },

        deleteItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        },
    },
});

export const {
    addToCart,
    getCartTotal,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
} = UserCartSlice.actions;


export default UserCartSlice.reducer;
