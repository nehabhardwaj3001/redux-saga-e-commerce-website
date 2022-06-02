import { combineReducers } from "redux";
import productsReducer from "./productReducer";
import cartReducer from './cartReducer';
import userReducer from "./userReducer";

const rootReducer = combineReducers({
	productsReducer: productsReducer,
	cartReducer: cartReducer,
	userReducer: userReducer
});

export default rootReducer;