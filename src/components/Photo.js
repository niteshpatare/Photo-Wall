import React from "react";
const Photo = ({ post }) => {
  const description = post.description;
  const src = post.imageLink;
  return (
    <figure className="figure">
      <div className="photo-wrapper">
        <img className="photo" src={src} alt={description} />
      </div>
      <figcaption>
        <p>{description}</p>
      </figcaption>
      <div className="button-container">
        <button className="remove-button">Remove</button>
      </div>
    </figure>
  );
};

export default Photo;
