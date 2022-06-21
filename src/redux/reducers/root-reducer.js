import { combineReducers  } from "redux";
import productsReducer from "./productReducer";
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    productsReducer : productsReducer,
    cartReducer : cartReducer
});

export default rootReducer;