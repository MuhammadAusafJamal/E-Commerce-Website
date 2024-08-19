import { configureStore } from "@reduxjs/toolkit";
import UserCartSlice from "./components/userCartSlice";

// export default  function Store(){
const store = configureStore({
    reducer: {
        cart: UserCartSlice
    }
})
//     return store;
// }

export default store;