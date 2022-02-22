import { ADD_ITEM } from "../types";
const initialState={
    carrito:[ ],
    subtotal:0
}
export default (state=initialState,action)=>{
    switch (action.type) {
        case ADD_ITEM:
            return{
                ...state, 
                carrito:action.payload.carrito,
                subtotal:action.payload.subtotal
            }  
        default:
            return state
    }
}