import React from "react";

const Comments = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    const commentPost = {
      comment,
      id: Number(new Date()),

    };
    console.log(commentPost); 
  };

  return (
    <div className="comment">
      <h2>Comments </h2>
      {/* props.comments.map() list all comments */}
      <form onSubmit={onSubmitHandler} className="comment-form">
        <input type="text" placeholder="Comments" name="comment" />
        <br /><br />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};

export default Comments;
