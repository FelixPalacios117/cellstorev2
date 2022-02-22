import { combineReducers } from "redux";
import carritoReducer from "./carritoReducer";
import loginReducer from "./loginReducer"; 
 
const rootReducers=combineReducers({
    login:loginReducer,
    carrito:carritoReducer
})
export default rootReducers