import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Title from "./components/Title";
import PhotoWall from "./components/PhotoWall";
import "./styles/stylesheet.css";
import { Routes, Route } from "react-router-dom";
import Single from "./components/Single";
import Create from "./components/Create";
import AddPhoto from "./components/AddPhoto";

const App = () => {
  return (
    <React.Fragment>
      <Title heading="Photogram">Image collector</Title>
      <Routes>
        <Route exact path="/" element={<PhotoWall />} />
        <Route exact path="addphoto" element={<AddPhoto />} />
        <Route exact path="single/:id" element={<Single />} />
        <Route exact path="create" element={<Create />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
