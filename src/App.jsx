import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import FrameFusion from "./components/FrameFusion";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frame-fusion" element={<FrameFusion />} />
      </Routes>
    </>
  );
};

export default App;
