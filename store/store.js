
import { configureStore } from '@reduxjs/toolkit';
import blogSlice from '../store/blogSlice'


const store = configureStore({
  reducer: {
    users: blogSlice,
  },
});

export default store;
