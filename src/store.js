import { configureStore } from "@reduxjs/toolkit";
import UserCartSlice from "./slices/userCartSlice.js";

// export default  function Store(){
const store = configureStore({
    reducer: {
        cart: UserCartSlice
    }
})
//     return store;
// }

export default store;