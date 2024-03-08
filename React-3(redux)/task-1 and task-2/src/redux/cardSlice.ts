import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  descriptionVisibility: false,
  likes: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    toggleDescription: (state) => {
      state.descriptionVisibility = !state.descriptionVisibility;
    },
    incrementLikesCount: (state) => {
      state.likes += 1;
    },
    decrementLikesCount: (state) => {
      state.likes -= 1;
    },
  },
});

export const { toggleDescription, incrementLikesCount, decrementLikesCount } = cardSlice.actions;
export default cardSlice.reducer;
