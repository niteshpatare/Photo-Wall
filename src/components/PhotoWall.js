import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const PhotoWall = () => {
  const history = useNavigate();
  const onAddHandler = () =>{
    history('/addphoto');
  }
  const posts = [
    {
      id: 1,
      description: "beautiful landscape",
      imageLink:
        "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg",
    },
    {
      id: 0,
      description: "Aliens???",
      imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
    },
    {
      id: 2,
      description: "On a vacation!",
      imageLink:
        "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
    },
  ];

  return (
    <>
      <button className="addIcon" onClick={onAddHandler}> + </button>
      <div className="photoGrid">
        {posts
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post) => (
            <Photo key={post.id} post={post} />
          ))}
      </div>
    </>
  );
};

Photo.propTypes = {
  posts: PropTypes.array,
};
export default PhotoWall;
