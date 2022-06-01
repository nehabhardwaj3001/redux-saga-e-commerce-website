import { RECEIVE_USER, ADD_USER } from "../actions/userAction";

const initialState = { users : []}

const userReducer = (state = initialState, action) => {
switch (action.type) {
   case RECEIVE_USER:
    return {
        ...state, users: action.data,
    };
    case "ADD_USER" :
        console.log("user", state.users)
        return {
            ...state, users : [...state.users,action.data]
        }
   default:
       return {...state};
}
}

export default userReducer;