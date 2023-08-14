import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import MainScreen from "./components/MainScreen";
import MatchingPage from "./components/MatchingPage";
import ComplimentPage from "./components/ComplimentPage";
import MorePage from "./components/MorePage";
import AccountPage from "./components/AccountPage";
import NoticePage from "./components/NoticePage";
import QuestionPage from "./components/QuestionPage";
import ServicePage from "./components/ServicePage";
import Service2Page from "./components/Service2Page";
import Service3Page from "./components/Service3Page";
import Service4Page from "./components/Service4Page";
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
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service2" element={<Service2Page />} />
          <Route path="/service3" element={<Service3Page />} />
          <Route path="/service4" element={<Service4Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
