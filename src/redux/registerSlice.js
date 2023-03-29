import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   currentUser: null,
   isFetching: false,
   error: false,
}
const registerSlice = createSlice({
    name: "newUser",
    initialState,
    reducers:{
        registerStart:(state)=>{
            state.isFetching = true;
        },
        registerSuccess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        registerFailure:(state,action)=>{
            state.isFetching = false;
            state.error = true;
        },
    },
})
export const {registerStart, registerSuccess, registerFailure} = registerSlice.actions;
export const newUser = (state) => state.newUser.newUser;
export default registerSlice.reducer;