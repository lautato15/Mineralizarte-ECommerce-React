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
            counter: action.payload.counter ? action.payload.counter : 1,
          };
          state.push(newItem);
        } else {
          state[index].counter = action.payload.counter + state[index].counter ;
        }
        return state;
    },
    removeItem(state, action) {
        const index = state.findIndex((item) => item.id === action.payload.id);
        state.splice(index, 1);
        return state;
      }
  },
});
const { actions, reducer } = cartSlice;
export const { addItem, removeItem } = actions;

export default reducer;