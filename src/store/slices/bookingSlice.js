//bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  adults: 1,
  children: 0, 
  rooms: 1,    
  checkInDate: '', 
  checkOutDate: '', 
  amount: 12430,
};


const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetBookingData: () => {
      return initialState; 
    },
  },
});

export const { setBookingData ,resetBookingData} = bookingSlice.actions;
export default bookingSlice.reducer;