import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import UserMainPage from "./components/UserMainPage";
import HelperMainPage from "./components/HelperMainPage";
import UserMyMatching from "./components/UserMyMatching";
import HelperMyMatching from "./components/HelperMyMatching";
import ComplimentPage from "./components/ComplimentPage";
import Volunteerlog from "./components/Volunteerlog";
import UserMorePage from "./components/UserMorePage";
import HelperMorePage from "./components/HelperMorePage";
import UserAccount from "./components/UserAccount";
import HelperAccount from "./components/HelperAccount";
import NoticePage from "./components/NoticePage";
import QuestionPage from "./components/QuestionPage";
import ServicePage from "./components/ServicePage";
import Service2Page from "./components/Service2Page";
import Service3Page from "./components/Service3Page";
import Service4Page from "./components/Service4Page";
import Delete from "./Delete";
import FastMatching from "./FastMatching";
import HelperFastMatching from "./HelperFastMatching";
import HelperList from "./HelperList";
import HelperListProfile from "./HelperListprofile";
import HelperMatching from "./HelperMatching";
import HelperSuggestMatching from "./HelperSuggestMatching";
import Login from "./Login";
import Matching from "./Matching";
import MyProfileEdit from "./MyProfileEdit";
import Profile from "./Profile";
import ProfileMatching from "./ProfileMatching";
import SelectRegion from "./SelectRegion";
import Type from "./Type";
import Typeinfo from "./Typeinfo";
import EditCareer from "./EditCareer";
import StartDate from "./StartDate";
import ProfileUploader from "./ProfileUploader";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/usermain" element={<UserMainPage />} />
          <Route path="/helpermain" element={<HelperMainPage />} />
          <Route path="/usermymatching" element={<UserMyMatching />} />
          <Route path="/helpermymatching" element={<HelperMyMatching />} />
          <Route path="/compliment" element={<ComplimentPage />} />
          <Route path="/volunteerlog" element={<Volunteerlog />} />
          <Route path="/usermore" element={<UserMorePage />} />
          <Route path="/helpermore" element={<HelperMorePage />} />
          <Route path="/useraccount" element={<UserAccount />} />
          <Route path="helperaccount" element={<HelperAccount />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service2" element={<Service2Page />} />
          <Route path="/service3" element={<Service3Page />} />
          <Route path="/service4" element={<Service4Page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/type" element={<Type />} />
          <Route path="/type/info" element={<Typeinfo />} />
          <Route path="/type/info/selectregion" element={<SelectRegion />} />
          <Route path="/match_type" element={<Matching />} />
          <Route path="/match/quick" element={<FastMatching />} />
          <Route path="/match/profile" element={<ProfileMatching />} />
          <Route path="/match/helperlist" element={<HelperList />} />
          <Route
            path="/matching/helperlist/profile"
            element={<HelperListProfile />}
          />
          <Route path="/match/delete" element={<Delete />} />
          <Route path="/profile/edit" element={<Profile />} />
          <Route path="/profile/edit/career" element={<EditCareer />} />
          <Route path="/profile/edit/date" element={<StartDate />} />
          <Route path="/helpermatching" element={<HelperMatching />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
