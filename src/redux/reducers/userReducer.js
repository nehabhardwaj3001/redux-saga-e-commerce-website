import { RECEIVE_USER } from "../actions/userAction";

const initialState = { users : []}

const userReducer = (state = initialState, action) => {
switch (action.type) {
   case "RECEIVE_USER":
    return {
        ...state, users: action.data,
    };
   default:
       return {...state};
}
}

export default userReducer;