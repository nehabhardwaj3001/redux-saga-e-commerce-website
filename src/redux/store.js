import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers/root-reducer";
import mySaga from "./sagas/saga";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const initialState = {};

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(mySaga);

export default store;
