import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CONSTANTS from '../components/constants';


export const fetchData = createAsyncThunk(
   'dataFilters/fetchData',
   async function (_, { rejectWithValue }) {
      try {
         const response = await fetch('https://my-json-server.typicode.com/Petrikens/json-server/data');
         if (!response.ok) {
            throw Error('Server Error!')
         }
         const responseData = response.json();
         return responseData;
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
);

const dataFiltersSlice = createSlice({
   name: 'dataFilters',
   initialState: {
      data: [],
      copyData: [],
      sort: CONSTANTS.SORT.POPULAR.value,
      brand: '',
      price: [0, 20000],
      size: CONSTANTS.SIZES,
      status: null,
      error: null,
      isReboot: false,
   },
   reducers: {
      rebootSort(state, action) {
         state.isReboot = action.payload.condition;
         if (state.isReboot) {
            state.data = state.copyData;
            state.size = CONSTANTS.SIZES;
            state.brand = '';
            state.price = [0, 20000];
         }
      },
      sortChange(state, action) {
         const { value } = action.payload.target;
         const sortData = [...state.data];
         switch (value) {
            case CONSTANTS.SORT.POPULAR.value:
               state.data = sortData.sort((a, b) => a.id - b.id);
               state.sort = CONSTANTS.SORT.POPULAR.value;
               break;
            case CONSTANTS.SORT.HIGH_PRICE.value:
               state.data = sortData.sort((a, b) => (a.price - b.price))
               state.sort = CONSTANTS.SORT.HIGH_PRICE.value;
               break;
            case CONSTANTS.SORT.LOW_PRICE.value:
               state.data = sortData.sort((a, b) => (b.price - a.price));
               state.sort = CONSTANTS.SORT.LOW_PRICE.value;
               break;
            default:
               break;
         }
      },
      brandFilter(state, action) {
         state.brand = action.payload.value;
      },
      sizeFilter(state, action) {
         if (action.payload.isActive === 'active') {
            const newSizeArr = [];
            newSizeArr.push(action.payload.innerHTML);
            state.size = newSizeArr;
         } else {
            const newSizeArr = [];
            newSizeArr.pop(action.payload.innerHTML);
            state.size = newSizeArr;
         };
         if (state.isReboot) {
            action.payload.isActive = 'normal'
         }
      },
      priceFilter(state, action) {
         state.price = action.payload.value
      },
      dataFilters(state, action) {
         if (action.payload.condition) {
            const newCopyData = [...state.copyData];
            const filters = newCopyData.filter(el => (el.brand === state.brand) &&
               (el.price >= state.price[0] && el.price <= state.price[1]) &&
               (el.sizes.some(size => state.size.includes(size))));


            if (state.sort === CONSTANTS.SORT.POPULAR.value) {
               state.data = newCopyData.sort((a, b) => a.id - b.id);
            } else if (state.sort === CONSTANTS.SORT.HIGH_PRICE.value) {
               state.data = newCopyData.sort((a, b) => (a.price - b.price));
            } else if (state.sort === CONSTANTS.SORT.LOW_PRICE.value) {
               state.data = newCopyData.sort((a, b) => (b.price - a.price));
            }


            if (state.brand === 'Nike') {
               state.data = filters;
            } else if (state.brand === 'Adidas') {
               state.data = filters;
            } else if (state.brand === 'New Balance') {
               state.data = filters;
            } else if (state.size.length) {
               state.data = newCopyData.filter(el => (el.price >= state.price[0] &&
                  el.price <= state.price[1]) &&
                  (el.sizes.some(size => state.size.includes(size))));
            }
            action.payload.condition = false;
            state.isReboot = false;
         }
         return
      }
   },
   extraReducers: {
      [fetchData.pending]: (state) => {
         state.status = 'loading';
         state.error = null;
      },
      [fetchData.fulfilled]: (state, action) => {
         state.status = 'resolved';
         state.data = action.payload;
         state.copyData = action.payload;
      },
      [fetchData.rejected]: (state, action) => {
         state.status = 'rejected';
         state.error = action.payload
      },
   },

});

export const { sortChange, dataFilters, brandFilter, sizeFilter, priceFilter, rebootSort } = dataFiltersSlice.actions;
export default dataFiltersSlice.reducer;