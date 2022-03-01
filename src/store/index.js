import { configureStore } from "@reduxjs/toolkit";
import addPhotoSlice from './addPhotoSlice';
import photoWallSlice from './photoWallSlice';
import commentsSlice from "./commentsSlice";
const store = configureStore({
  reducer: {
    addPhRed: addPhotoSlice.reducer,
    phWallRed: photoWallSlice.reducer,
    commentsRed: commentsSlice.reducer,
  },
});

export default store;
