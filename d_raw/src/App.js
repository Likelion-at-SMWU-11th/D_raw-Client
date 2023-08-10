// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import MainScreen from "./components/MainScreen";
import "./App.css";
import MatchingPage from "./components/MatchingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/matching" component={MatchingPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
