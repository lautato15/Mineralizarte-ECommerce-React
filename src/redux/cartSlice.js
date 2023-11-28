import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
      console.log("PAYLOAD");
      console.log(action.payload);
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index == -1) {
        const newItem = {
          ...action.payload,
          counter: action.payload.counter ? action.payload.counter : 1,
        };
        state.push(newItem);
      } else {
        state[index].counter = state[index].counter + 1;
      }
      return state;
    },
    subItem(state, action) {
        const index = state.findIndex((item) => item.id === action.payload.id);
        if (state[index].counter > 1) {
          state[index].counter--;
        } else {
          state.splice(index, 1);
        }
        return state;
      },
    updateCounterProduct(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].counter = action.payload.newCounter;
      return state;
    },
    removeItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state.splice(index, 1);
      return state;
    },
  },
});
const { actions, reducer } = cartSlice;
export const { addItem, subItem, removeItem, updateCounterProduct } = actions;

export default reducer;
