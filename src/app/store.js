import { configureStore } from '@reduxjs/toolkit';
import addtocartSlice from '../reducers/addtocartSlice';

export const store = configureStore({
  reducer: {
    addtocart:addtocartSlice
   },
});
