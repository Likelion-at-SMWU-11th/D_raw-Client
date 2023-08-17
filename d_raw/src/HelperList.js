import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./static/Base.css";
import "./static/HelperList.css";

const HelperList = () => {
  const navigate = useNavigate();

  const goToHelperProfile = () => {
    navigate("/match/profile/<int:pk>");
  };

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="helperlist_div">
      <header>
        {" "}
        <img
          src="/images/back.png"
          className="GoBackButton"
          onClick={onBack}
          width="20"
          height="20"
        />
        안내사 목록
      </header>
      <hr />
      <div className="helper_notice">
        D:raw 안내사는 최대 3명까지 선택 가능합니다.{" "}
      </div>
      <div className="helperlist">
        <div className="helper">
          <br />
          <div className="helperlist_content_left">
            <span className="helperlist_name">김눈송</span>
            <br />
            <span className="helperlist_time">D:raw 활동 65시간</span> <br />
            <span className="helperlist_stamp">🎖 도장 &#40;78&#41;</span>
          </div>
          <div className="helperlist_content_right">
            <img
              className="helperlist_image"
              src="/images/default_profile.png"
            />
            <br />
            <span className="helperlist_image_detail">
              상세프로필 {/* &nbsp; */}
              <span
                className="helperlist_image_detail"
                onClick={goToHelperProfile}
              >
                {" "}
                &#62;
              </span>
            </span>
          </div>
          <button type="submit" className="add_profile">
            신청 완료
          </button>
        </div>
      </div>
      {/*       두번째 */}
      <div className="helperlist">
        <div className="helper">
          <br />
          <div className="helperlist_content_left">
            <span className="helperlist_name">김눈송</span>
            <br />
            <span className="helperlist_time">D:raw 활동 65시간</span> <br />
            <span className="helperlist_stamp">🎖 도장 &#40;78&#41;</span>
          </div>
          <div className="helperlist_content_right">
            <img
              className="helperlist_image"
              src="/images/default_profile.png"
            />
            <br />
            <span className="helperlist_image_detail">
              상세프로필 {/* &nbsp; */}
              <span
                className="helperlist_image_detail"
                onClick={goToHelperProfile}
              >
                {" "}
                &#62;
              </span>
            </span>
          </div>
          <button type="submit" className="add_profile">
            신청 완료
          </button>
        </div>
      </div>
      {/*       <div className="helperlist">
        <div className="helper">
          <br />
          <div className="helperlist_content_left">
            <span className="helperlist_name">김눈송</span>
            <br />
            <span className="helperlist_time">D:raw 활동 65시간</span> <br />
            <span className="helperlist_stamp">🎖 도장 &#40;78&#41;</span>
          </div>
          <div className="helperlist_content_right">
            <img
              className="helperlist_image"
              src="/images/default_profile.png"
            />
            <br />
            <span className="helperlist_image_detail">
              상세프로필
              <span
                className="helperlist_image_detail"
                onClick={goToHelperProfile}
              >
                {" "}
                &#62;
              </span>
            </span>
          </div>
        </div>
        <button type="submit" className="add_profile">
          신청 완료
        </button>
      </div> */}
    </div>
  );
};

export default HelperList;
