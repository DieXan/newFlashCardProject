import { configureStore } from "@reduxjs/toolkit";
import wordSlice from './wordSlice'

export default configureStore({
  reducer: {
    wordHandler: wordSlice
  },
});
