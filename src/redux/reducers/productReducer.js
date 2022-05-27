import { GET_PRODUCTS_FETCH, 
	     GET_ALL_PRODUCTS_SUCCESS, 
		 GET_PRODUCTS_DETAILS_SUCCESS, 
		 GET_PRODUCTS_CATEGORY_SUCCESS
		} from "../actions/productAction";

const initialState = { products: [], productDetails: [], categories: [] };

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.products,
			};
		case GET_PRODUCTS_DETAILS_SUCCESS:
			return {
				...state,
				productDetails: action.productDetails,
			};
		case GET_PRODUCTS_CATEGORY_SUCCESS:
			return {
				...state,
				categories: action.categories,
			};
		default:
			return state;
	}
}

export default productsReducer;