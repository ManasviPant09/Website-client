import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import registerReducer from "./registerSlice";
export default configureStore({
  reducer : {
    user: userReducer,
    newUser: registerReducer,
    cart: cartReducer,
  },
});