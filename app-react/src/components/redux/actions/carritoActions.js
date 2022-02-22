import { ADD_ITEM } from "../types";
export const agregarItem=item=>dispatch=>{
    try {
        dispatch({
            type:ADD_ITEM,
            payload:item
        })
    } catch (error) {
        console.log(error)
    }
}