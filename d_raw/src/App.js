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
import HelperMatching from "./HelperMatching";
import HelperSuggestMatching from "./HelperSuggestMatching";
import Login from "./Login";
import Matching from "./Matching";
import Profile from "./Profile";
import ProfileMatching from "./ProfileMatching";
import SelectRegion from "./SelectRegion";
import Type from "./Type";
import Typeinfo from "./Typeinfo";
import EditCareer from "./EditCareer";
import StartDate from "./StartDate";
import HelperDetail from "./components/HelperDetail";

import "./App.css";
import KakaoRedirectHandler from "./KakaoRedirectHandler";
import Helper from "./Helper";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/main/user" element={<UserMainPage />} />
          <Route path="/main/guide" element={<HelperMainPage />} />
          <Route path="/match/mypage/user" element={<UserMyMatching />} />
          <Route path="/match/mypage/guide" element={<HelperMyMatching />} />
          <Route path="/compliment" element={<ComplimentPage />} />
          <Route path="/volunteerlog" element={<Volunteerlog />} />
          <Route path="/usermore" element={<UserMorePage />} />
          <Route path="/helpermore" element={<HelperMorePage />} />
          <Route path="/useraccount" element={<UserAccount />} />
          <Route path="helperaccount" element={<HelperAccount />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/match/profile/<int:pk>" element={<HelperDetail />} />
          <Route path="/match/1" element={<ServicePage />} />
          <Route path="/match/2" element={<Service2Page />} />
          <Route path="/match/3" element={<Service3Page />} />
          <Route path="/match/4" element={<Service4Page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/type" element={<Type />} />
          <Route path="/type/info" element={<Typeinfo />} />
          <Route path="/type/info/selectregion" element={<SelectRegion />} />
          <Route path="/match/check" element={<Matching />} />
          <Route path="/match/quick" element={<FastMatching />} />
          <Route path="/match/profile" element={<ProfileMatching />} />
          <Route path="/match/helperlist" element={<HelperList />} />
          <Route path="/match/delete" element={<Delete />} />
          <Route path="/account/guideprofile" element={<Profile />} />
          <Route
            path="/account/guideedit/<int:guide_id>"
            element={<EditCareer />}
          />
          <Route path="/profile/edit/date" element={<StartDate />} />
          <Route path="/match/search" element={<HelperMatching />} />
          <Route
            path="/account/kakao/accesstoken/"
            element={<KakaoRedirectHandler />}
          />
          <Route path="/test" element={<Helper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
