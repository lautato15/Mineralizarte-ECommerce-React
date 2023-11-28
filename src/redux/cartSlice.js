import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
        const index = state.findIndex((item) => item.id === action.payload.id);
        if (index == -1) {
          const newItem = {
            ...action.payload,
            count: action.payload.count ? action.payload.count : 1,
          };
          state.push(newItem);
        } else {
          state[index].count = state[index].count + 1;
        }
        return state;
    }
  },
});
const { actions, reducer } = cartSlice;
export const { addItem } = actions;

export default reducer;