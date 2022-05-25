import { GET_PRODUCTS_FETCH, GET_ALL_PRODUCTS_SUCCESS , GET_PRODUCTS_DETAILS_SUCCESS } from "./action";

const initialState = {products : [], loading: false, error: null, productDetails : []};

const productsReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case GET_ALL_PRODUCTS_SUCCESS : 
        return{
            ...state,
            products: action.products,
        };
        case GET_PRODUCTS_DETAILS_SUCCESS : 
        return{
            ...state,
            productDetails: action.productDetails,
        };
        // case "FETCH_PRODUCTS_FAILURE" : 
        // return{
        //     ...state,
        //     loading: false,
        //     error: action.payload,
        // };
        default:
            return state;
    }
}

export default productsReducer;