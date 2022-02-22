import { LOGIN, LOGOUT } from "../types";

export const LoginU=token=>dispatch=>{
    try { 
        dispatch({
            type:LOGIN,
            payload:token
        })
    } catch (error) {
        console.log("Error"+error)
    }
} 
export function LogOut(){
    try { 
        return({
            type:LOGOUT,
            payload:''
        })
    } catch (error) {
        console.log("Error"+error)
    }
} 