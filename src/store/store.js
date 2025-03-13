/**
 * @file store.js
 * @description This file sets up the Redux store with Redux Toolkit and Redux-Saga middleware.
 * 
 * @module store
 */

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tabsReducer from "./tabsSlice";
import { rootSaga } from "./sagas";

/**
 * @constant {Object} sagaMiddleware - The middleware to run Redux-Saga.
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * @constant {Object} store - The Redux store configured with the tabs reducer and Redux-Saga middleware.
 */
const store = configureStore({
    reducer: { tabs: tabsReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

/**
 * Runs the root saga using the saga middleware.
 */
sagaMiddleware.run(rootSaga);

export default store;
