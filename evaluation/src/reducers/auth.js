import { ADD_USER_FAILURE,ADD_USER_SUCCESS,ADD_USER_REQUEST } from "./actions";


const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
      };
   
    case ADD_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case ADD_USER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    
    default:
      return state;
  }
}