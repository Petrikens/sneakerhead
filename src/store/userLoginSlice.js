import { createSlice } from '@reduxjs/toolkit';



const userLoginSlice = createSlice({
   name: 'userLogin',
   initialState: {
      email: null,
      token: null,
      id: null,
      userName: null
   },
   reducers: {
      setUser(state, action) {
         state.email = action.payload.email;
         state.token = action.payload.token;
         state.id = action.payload.id;
         state.userName = action.payload.userName;
      },
      removeUser(state) {
         state.email = null;
         state.token = null;
         state.id = null;
         state.userName = null;
      },
   }
})

export const { setUser, removeUser } = userLoginSlice.actions;
export default userLoginSlice.reducer;
