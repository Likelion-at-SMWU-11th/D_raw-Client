import React from "react";
import { useNavigate } from "react-router-dom";
import "./static/Base.css";
import "./static/Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const goToProfileEditPage = () => {
    navigate("/profile/edit");
  };
  return (
    <div>
      <header>내 프로필 수정</header>
      <div class="box">
        <img class="profile" src="/images/default_profile.png" />
      </div>
      <div className="profile_info">
        <div className="profile_info_title">
          성별
          <div className="profile_info_content">여성</div>
        </div>
        <div className="profile_info_title">
          나이
          <div className="profile_info_content">23세</div>
        </div>
        <div className="profile_info_title">
          총 봉사 경력
          <div className="profile_info_content">1년</div>
        </div>
        <div className="profile_info_title">
          D:raw 활동 시작 일자
          <div className="profile_info_content"> </div>
        </div>
        <div className="profile_info_title">내 리뷰 보기</div>
        <button className="submit" onClick={goToProfileEditPage}>
          수정
        </button>
      </div>
    </div>
  );
};

export default Profile;
