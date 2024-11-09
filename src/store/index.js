import { configureStore } from '@reduxjs/toolkit';
import bookingSlice from './slices/bookingSlice';

const store = configureStore({
  reducer: {
    booking: bookingSlice,
  },
});

export default store;
