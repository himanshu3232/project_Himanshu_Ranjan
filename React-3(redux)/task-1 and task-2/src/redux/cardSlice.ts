import { createSlice } from "@reduxjs/toolkit";

interface CardContext {
  likes: number;
  descriptionVisibility: boolean;
}
const initialState: CardContext = {
  likes: 0,
  descriptionVisibility: false,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    incrementLikesCount: (state) => {
      state.likes++;
    },
    decrementLikesCount: (state) => {
      state.likes--;
    },
    toggleDescription: (state) => {
      state.descriptionVisibility = !state.descriptionVisibility;
    },
  },
});

export const { incrementLikesCount, toggleDescription, decrementLikesCount } =
  cardSlice.actions;
export default cardSlice.reducer;
