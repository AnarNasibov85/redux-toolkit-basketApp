import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './global/basketSlice'; // basketSlice.reducer olarak değiştirin

const store = configureStore({
  reducer: {
    user: basketReducer,
  },
});

export default store;
