import { takeEvery, call , put} from "redux-saga/effects";
import {GET_PRODUCTS_FETCH,
        GET_ALL_PRODUCTS_SUCCESS, 
        GET_PRODUCTS_DETAILS_SUCCESS ,
        GET_PRODUCTS_DETAILS_FETCH ,
        GET_PRODUCTS_CATEGORY_SUCCESS,
        GET_PRODUCTS_CATEGORY_FETCH
       } from './action';
import { productsFetch , productDetailsFetch} from "./api";


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
    const categories = yield call (productDetailsFetch,action.category);
    console.log("categories",categories)
    yield put({ type: GET_PRODUCTS_CATEGORY_SUCCESS, categories})
}

function* mysaga() {
    yield takeEvery(GET_PRODUCTS_FETCH, getProductsFetch);
    yield takeEvery(GET_PRODUCTS_DETAILS_FETCH, getProductDetailsFetch);
    yield takeEvery(GET_PRODUCTS_CATEGORY_FETCH, getProductCategoryFetch);
}

export default mysaga;