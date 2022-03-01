import { createSlice } from "@reduxjs/toolkit";
const initialPhotoWallState = {
    photos: []
}
const photoWallSlice = createSlice({
  name: "phWallRed",
  initialState: initialPhotoWallState,
  reducers: {
      fetchPhotos(state,action){

      }
  },
});
export const photoWallAction = photoWallSlice.actions
export default photoWallSlice;