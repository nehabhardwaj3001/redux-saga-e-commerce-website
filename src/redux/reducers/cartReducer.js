import { ADD_TO_CART, 
		 REMOVE_FROM_CART, 
       } from "../actions/cartAction";

const initialState = { cartItems : []}

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const item = state.cartItems.find(obj => obj.id === action.data.id);
			return item ? state : {...state,cartItems:[...state.cartItems,action.data]}
			
		case REMOVE_FROM_CART:
			const remove = state.cartItems.filter(obj => obj.id !== action.data.id);
			state.cartItems = remove;
			return {
				...state
			}

		default:
			return state;
}
}

export default productsReducer;