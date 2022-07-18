import { configureStore } from "@reduxjs/toolkit";
import dataFiltersReducer from './dataFiltersSlice';
import productCardReducer from './productCardSlice';
import userLoginSlice from './userLoginSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
   key: "root",
   version: 1,
   storage,
};

const reducer = combineReducers({
   dataFilters: dataFiltersReducer,
   productCard: productCardReducer,
   userLogin: userLoginSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
   reducer: persistedReducer,
});

export default store;