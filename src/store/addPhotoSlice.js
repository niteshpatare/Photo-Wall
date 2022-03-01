import { createSlice } from "@reduxjs/toolkit";

const initialPhotoState = {
  imageLink: "",
  description: "",
  comments: [],
};
const addPhotoSlice = createSlice({
  name: "addPhRed",
  initialState: initialPhotoState,
  reducers: {
    addPhoto(state, action) {},
  },
});
export const addPhotoAction = addPhotoSlice.actions;
export default addPhotoSlice;