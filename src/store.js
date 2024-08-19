import { configureStore } from "@reduxjs/toolkit";
import UserCartSlice from "./components/userCartSlice.js";

// export default  function Store(){
const store = configureStore({
    reducer: {
        cart: UserCartSlice
    }
})
//     return store;
// }

export default store;