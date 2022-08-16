import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // two action function
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {},
  },
});

// to use this actions or function another component
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// selector help us to fetch the data from the basket
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
