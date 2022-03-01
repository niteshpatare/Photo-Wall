import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Photo = ({ post }) => {
  const description = post.description;
  const src = post.imageLink;
  return (
    <figure className="figure">
      <Link to={`/single/${post.id}`}>
        <img className="photo" src={src} alt={description} />
      </Link>
      <figcaption>
        <p>{description}</p>
      </figcaption>
      <div className="button-container">
        <button className="remove-button">Remove</button>
        <button className="remove-button">Comments</button>
      </div>
    </figure>
  );
};
Photo.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Photo;
