import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likesCount: 0,
  message:
    "Chandramuki2 is a 2023 Indian Tamil-language comedy horror film written and directed by P. Vasu.",
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    incrementLikesCount: (state) => {
      state.likesCount++;
    },
    decrementLikesCount: (state) => {
      state.likesCount--;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { incrementLikesCount, decrementLikesCount, setMessage } =
  cardSlice.actions;
export default cardSlice.reducer;
