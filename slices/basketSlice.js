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
    removeFromBasket: (state, action) => {
      // if index is not found it return -1
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.items];
      if (index >= 0) {
        // item exist

        // delete 1 item
        // if we use filter it will remove all the item
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove the product (id: ${action.payload.id}) as it is not in the basket `
        );
      }

      state.items = newBasket;
    },
  },
});

// to use this actions or function another component
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// selector help us to fetch the data from the basket
export const selectItems = (state) => state.basket.items;
// for total
// reduce gives two things variable total and item which i loop through and initial total=0
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
