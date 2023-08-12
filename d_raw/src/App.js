import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import MainScreen from "./components/MainScreen";
import MatchingPage from "./components/MatchingPage";
import ComplimentPage from "./components/ComplimentPage";
import MorePage from "./components/MorePage";
import AccountPage from "./components/AccountPage";
import ServicePage from "./components/ServicePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/matching" element={<MatchingPage />} />
          <Route path="/compliment" element={<ComplimentPage />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/service" element={<ServicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
