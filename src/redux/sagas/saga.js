import { takeEvery, call , put} from "redux-saga/effects";
import { GET_PRODUCTS_FETCH,
        GET_ALL_PRODUCTS_SUCCESS, 
        GET_PRODUCTS_DETAILS_SUCCESS ,
        GET_PRODUCTS_DETAILS_FETCH ,
        GET_PRODUCTS_CATEGORY_SUCCESS,
        GET_PRODUCTS_CATEGORY_FETCH
       } from '../actions/productAction';
import { ADD_TO_CART } from '../actions/cartAction';
import { productsFetch , productDetailsFetch, productCategoriesFetch } from "../api";


function* getProductsFetch() {
    const products = yield call (productsFetch);
    yield put({ type: GET_ALL_PRODUCTS_SUCCESS, products})
}

function* getProductDetailsFetch(action) {
    const productDetails = yield call (productDetailsFetch,action.id);
    // console.log("hcdhv",productDetails)
    yield put({ type: GET_PRODUCTS_DETAILS_SUCCESS, productDetails})
}

function* getProductCategoryFetch(action) {
    const categories = yield call (productCategoriesFetch,action.category);
    console.log("categories",categories)
    yield put({ type: GET_PRODUCTS_CATEGORY_SUCCESS, categories})
}

// function* getCartItemsFetch() {
//     const cartItems = yield call ();
//     yield put({ type: ADD_TO_CART, cartItems})
// }

function* mysaga() {
    yield takeEvery ( GET_PRODUCTS_FETCH, getProductsFetch );
    yield takeEvery ( GET_PRODUCTS_DETAILS_FETCH, getProductDetailsFetch );
    yield takeEvery ( GET_PRODUCTS_CATEGORY_FETCH, getProductCategoryFetch );
    // yield takeEvery ( ADD_TO_CART, getCartItemsFetch )
}

export default mysaga;