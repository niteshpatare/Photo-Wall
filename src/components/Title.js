import React from "react";
import { Link } from "react-router-dom";
const Title = ({ heading }) => {
  return (
    <>
      <h1>
        <Link to="/">{heading}</Link>
      </h1>
    </>
  );
};

export default Title;
