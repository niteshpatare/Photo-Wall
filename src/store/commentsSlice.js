import { createSlice } from "@reduxjs/toolkit";

const initialCommenstState = {
  postId: "",
  comments: [],
};
const commentsSlice = createSlice({
  name: "commentsRed",
  initialState: initialCommenstState,
  reducers: {
    fetchComments(state, action) {},
    postComment(state, action){},
  },
});

export const commentsAction = commentsSlice.actions;
export default commentsSlice;
