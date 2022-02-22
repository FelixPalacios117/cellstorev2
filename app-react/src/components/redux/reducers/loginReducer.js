import { LOGIN,LOGOUT } from "../types";
const initialState = {
  token: "",
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
