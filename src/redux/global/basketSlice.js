import { createSlice } from '@reduxjs/toolkit';


export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    carts: [],
    quantity: 0,
  },
  reducers: {
    addToBasket: (state, action) => {
      const { id, name, price, imageUrl, quantity } = action.payload;
      const existingItem = state.carts.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.price; // totalPrice'i güncelle
      } else {
        const totalPrice = price * quantity; // Fiyatı hesapla
        state.carts.push({ id, name, price, imageUrl, quantity, totalPrice }); // totalPrice'i ekle
      }
    },
    

    incrementQuantity: (state, action) => { 
      const { id } = action.payload;
      const item = state.carts.find(item => item.id === id);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price; 
      }
    },
    
    
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.carts.find(item => item.id === id);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price; 
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
