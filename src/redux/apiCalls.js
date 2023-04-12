import { publicRequest } from "../requestMethods";
import { registerStart, registerFailure, registerSuccess } from "./registerSlice";
import { loginStart,loginFailure, loginSuccess } from "./userSlice";

export const login = async (dispatch,user) =>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("https://website-api-i932.onrender.com/api/auth/login",user);
        dispatch(loginSuccess(res.data));
    }
    catch(err){
        dispatch(loginFailure());
    }

}
export const register = async (dispatch,newUser) =>{
    console.log(newUser);
    dispatch(registerStart());
    try{
        const res = await publicRequest.post("https://website-api-i932.onrender.com/api/auth/register",newUser);
        dispatch(registerSuccess(res.data));
    }
    catch(err){
        dispatch(registerFailure());
    }
}