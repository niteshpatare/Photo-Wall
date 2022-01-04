import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Title from "./components/Title";
import PhotoWall from "./components/PhotoWall";
import "./styles/stylesheet.css";

const App = () => {
  return (
    <React.Fragment>
      <Title heading="Photogram"></Title>
      <PhotoWall />
    </React.Fragment>
  );
};

export default App;
