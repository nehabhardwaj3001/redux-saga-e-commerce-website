import { GET_ALL_PRODUCTS_SUCCESS, 
	     ADD_PRODUCT,
		 GET_PRODUCTS_DETAILS_SUCCESS, 
		 GET_PRODUCTS_CATEGORY_SUCCESS,
		} from "../actions/productAction";

const initialState = { products: [], productDetails: [], categories: [] };

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_PRODUCTS_SUCCESS:
			console.log("state1", state)
			return {
				...state,
				products: action.products,
			};
		case GET_PRODUCTS_DETAILS_SUCCESS:
			console.log("state2", state)
			return {
				...state,
				productDetails: action.productDetails,
			};
		case GET_PRODUCTS_CATEGORY_SUCCESS:
			console.log("state3", state)
			return {
				...state,
				categories: action.categories,
			};
		case "ADD_PRODUCT":
			console.log("pro  redu", state.products)
			return {
				...state, 
				products : [...state.products,action.data]
			};
		default:
			return state;
	}
}

export default productsReducer;