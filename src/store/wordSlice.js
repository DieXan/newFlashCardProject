import { createSlice } from "@reduxjs/toolkit";
import defaultState from "./defaultState";

export const wordSlice = createSlice({
  name: "wordHandler",
  initialState: defaultState,
  reducers: {
    addWord: (state, actions) => {
      state[Object.keys(state).length] = {
        id: Object.keys(state).length,
        word: actions.payload.word,
        mean: actions.payload.mean,
      };
    },
    uploadWords: (state, action) => {
      return action.payload;
    },
  },
});

export const { addWord, uploadWords } = wordSlice.actions;

export default wordSlice.reducer;
