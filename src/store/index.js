import { configureStore } from "@reduxjs/toolkit";
import dataFiltersReducer from './dataFiltersSlice';
import productCardReducer from './productCardSlice';
import userLoginSlice from './userLoginSlice'

export default configureStore({
   reducer: {
      dataFilters: dataFiltersReducer,
      productCard: productCardReducer,
      userLogin: userLoginSlice,
   }
}) 