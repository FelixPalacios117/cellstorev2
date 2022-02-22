import { ADD_ITEM } from "../types";
/* const {subtotal}=JSON.parse(localStorage.getItem('carrito'))
const {carrito}=JSON.parse(localStorage.getItem('carrito'))  */
const initialState = {
  carrito: localStorage.getItem("carrito")
    ? JSON.parse(localStorage.getItem("carrito")).carrito
    : [],
  subtotal: localStorage.getItem("carrito")
    ? JSON.parse(localStorage.getItem("carrito")).subtotal
    : 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        carrito: action.payload.carrito,
        subtotal: action.payload.subtotal,
      };
    default:
      return state;
  }
};
