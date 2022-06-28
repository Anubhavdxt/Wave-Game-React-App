import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Header from "./pages/Header";
import Lost from "./pages/404";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="/start" element={<Header />} />

          <Route path="*" element={<Lost />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;