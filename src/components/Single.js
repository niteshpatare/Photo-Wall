import React from "react";
import { useParams } from "react-router-dom";
import Photo from './Photo';
import Comments from './Comments';

const Single = () => {
  const params = useParams();
  const id = Number(params.id);
  //   const post  = //get all post and .find()
//   fetch comments and comments = comments[match.id]
  return (
    <div className="single-photo">
      <h1>#{id}</h1>
      {/* <Photo post={post} /> */}
      <Comments id={id} /> {/*comments={comments} */} 
    </div>
  );
};

export default Single;
