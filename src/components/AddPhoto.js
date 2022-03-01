import React from "react";
import { useNavigate } from "react-router-dom";
const AddPhoto = () => {
  const history = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const image = event.target.elements.link.value;
    const desc = event.target.elements.description.value;
    const post = {
      image,
      desc,
      id: Number(new Date()),
    };
    console.log(post);
    history("/");
  };
  return (
    <>
      <div className="form">
        <h2>AddPhoto </h2>
        <form onSubmit={onSubmitHandler}>
          <input type="text" placeholder="Link" name="link" />
          <input type="text" placeholder="Description" name="description" />
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
};

export default AddPhoto;