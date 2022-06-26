import { createSlice } from '@reduxjs/toolkit';



const productCardSlice = createSlice({
   name: 'productCard',
   initialState: {
      productData: [],
      cartCount: 0,
   },
   reducers: {
      getProductData(state, action) {
         state.productData.push(action.payload.data);
      },
      increaseProductCart(state) {
         state.cartCount = state.cartCount + 1
      },
      deleteElementCart(state, action) {
         state.productData = state.productData.filter(el => el.id !== action.payload.id);
         state.cartCount = state.cartCount - 1;
      }

   }
})

export const { getProductData, increaseProductCart, deleteElementCart } = productCardSlice.actions;
export default productCardSlice.reducer;