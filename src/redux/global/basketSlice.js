import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: [],
  quantity: 0
};

export const basketSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    addToBasket: (state, action) => {
      const { id, name, price, imageUrl, quantity } = action.payload;
      const existingItem = state.carts.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.carts.push({ id, name, price, imageUrl, quantity });
      }
    },

    incrementQuantity: (state, action) => { 
      const { id } = action.payload;
      const itemIndex = state.carts.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        state.carts[itemIndex].quantity += 1;
        state.carts[itemIndex].totalPrice = state.carts[itemIndex].quantity * state.carts[itemIndex].price; // Ürün miktarını güncellerken toplam fiyatı güncelle
      }
    }, 
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.carts.findIndex(item => item.id === id);
      if (itemIndex !== -1 && state.carts[itemIndex].quantity > 0) {
        state.carts[itemIndex].quantity -= 1;
        state.carts[itemIndex].totalPrice = state.carts[itemIndex].quantity * state.carts[itemIndex].price; // Ürün miktarını güncellerken toplam fiyatı güncelle
      }
    },
    removeFromBasket: (state, action) => {
      const { id } = action.payload;
      state.carts = state.carts.filter(item => item.id !== id);
    },
  },
});

export const { addToBasket, removeFromBasket, decrementQuantity, incrementQuantity } = basketSlice.actions;

export default basketSlice.reducer;
