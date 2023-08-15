import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./static/Base.css";
import "./static/FastMatching.css";

const FastMatching = () => {
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleOpenMenu = () => {
    setIsOpenMenu((isOpenMenu) => isOpenMenu); //on&off 개념
  };

  const goToEditPage = () => {
    navigate("/matching");
  };

  const goToDeletePage = () => {
    navigate("/matching/delete");
  };

  return (
    <div>
      <header>
        D:raw 안내사 매칭
        <img
          className="fastmatching_menu"
          src="/images/matching_menu.png"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        />
      </header>
      <hr />
      <h3>⚡ 빠른 매칭 가능한 D:raw 안내사</h3>
      <div className="fastmatching_apply">
        안내사님이 지원하면 바로 매칭돼요!
      </div>
      <div className="fastmatching_content">
        <span className="icon">👀</span>
        <br /> <br />
        <span>안내사님들이 신청서를 </span>
        <br />
        <span>살펴보는 중입니다</span>
      </div>
      <br />
      {isOpenMenu ? (
        <>
          <div className="menu_open">
            <div className="menu_open_title">
              <h3>메뉴</h3>
              <img
                className="menu_delete"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                src="/images/close.png"
              />
            </div>
            <div className="menu_open_content" onClick={goToEditPage}>
              수정하기
            </div>
            <br />
            <div className="menu_open_content" onClick={goToDeletePage}>
              취소하기
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default FastMatching;
