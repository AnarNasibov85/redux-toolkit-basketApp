import { configureStore } from '@reduxjs/toolkit';

import basketSlice from './global/basketSlice';

const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
});

export default store;
