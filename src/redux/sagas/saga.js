import { takeEvery, call , put} from "redux-saga/effects";
import { GET_PRODUCTS_FETCH,
        GET_ALL_PRODUCTS_SUCCESS, 
        GET_PRODUCTS_DETAILS_SUCCESS ,
        GET_PRODUCTS_DETAILS_FETCH ,
        GET_PRODUCTS_CATEGORY_SUCCESS,
        GET_PRODUCTS_CATEGORY_FETCH
       } from '../actions/productAction';
import { ADD_TO_CART } from '../actions/cartAction';
 import { RECEIVE_USER , USERS_FETCH} from "../actions/userAction";
import { productsFetch , productDetailsFetch, productCategoriesFetch, usersFetch } from "../api";
import {receiveUser} from '../actions/userAction'

function* getProductsFetch() {
    const products = yield call (productsFetch);
    yield put({ type: GET_ALL_PRODUCTS_SUCCESS, products})
}

function* getProductDetailsFetch(action) {
    const productDetails = yield call (productDetailsFetch,action.id);
    yield put({ type: GET_PRODUCTS_DETAILS_SUCCESS, productDetails})
}

function* getProductCategoryFetch(action) {
    const categories = yield call (productCategoriesFetch, action.category);
    console.log("categories",categories)
    yield put({ type: GET_PRODUCTS_CATEGORY_SUCCESS, categories})
}

function* getuserFetch() {
    const users = yield call (usersFetch);
    console.log("user", users)
    yield put(receiveUser(users))
}

function* mysaga() {
    yield takeEvery ( GET_PRODUCTS_FETCH, getProductsFetch );
    yield takeEvery ( GET_PRODUCTS_DETAILS_FETCH, getProductDetailsFetch );
    yield takeEvery ( GET_PRODUCTS_CATEGORY_FETCH, getProductCategoryFetch );
    yield takeEvery ( USERS_FETCH, getuserFetch )
}

export default mysaga;