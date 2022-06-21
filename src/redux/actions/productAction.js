import { type } from "@testing-library/user-event/dist/type";

export const GET_PRODUCTS_FETCH = "GET_PRODUCTS_FETCH";
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const GET_PRODUCTS_DETAILS_SUCCESS = "GET_PRODUCTS_DETAILS_SUCCESS";
export const GET_PRODUCTS_DETAILS_FETCH = "GET_PRODUCTS_DETAILS_FETCH";

export const GET_PRODUCTS_CATEGORY_FETCH = "GET_PRODUCTS_CATEGORY_FETCH";
export const GET_PRODUCTS_CATEGORY_SUCCESS = "GET_PRODUCTS_CATEGORY_SUCCESS";


export const getProductsFetch = (response) => ({
    type: "GET_PRODUCTS_FETCH",
    response
});

export const getProductsSuccess = (response) => ({
    type: "GET_ALL_PRODUCTS_SUCCESS",
    response
});

export const addProduct = (data) => ({
    type: "ADD_PRODUCT",
    data
});

export const getProductDetailsFetch = (id) => ({
    type: GET_PRODUCTS_DETAILS_FETCH,
    id
});

export const getProductCategoryFetch = (category) => ({
    type: GET_PRODUCTS_CATEGORY_FETCH,
    category,
});



// export const getProductDetailsSuccess = (id) => ({
//     type: GET_PRODUCTS_DETAILS_SUCCESS,
//     id
// });