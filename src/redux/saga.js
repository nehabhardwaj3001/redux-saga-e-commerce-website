import { takeEvery, call , put} from "redux-saga/effects";
import {GET_PRODUCTS_FETCH, GET_ALL_PRODUCTS_SUCCESS, GET_PRODUCTS_DETAILS_SUCCESS , GET_PRODUCTS_DETAILS_FETCH } from './action';
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

function* mysaga() {
    yield takeEvery(GET_PRODUCTS_FETCH, getProductsFetch);
    yield takeEvery(GET_PRODUCTS_DETAILS_FETCH, getProductDetailsFetch);
}

export default mysaga;