import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./static/Base.css";
import "./static/HelperFastMatching.css";

const HelperSuggestMatching_content = () => {
  const navigate = useNavigate();

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const goMain = () => {
    navigate("/main/guide");
  };

  const SelectedButton = styled.button`
    width: 60px;
    height: 30px;
    border-radius: 8px;
    color: #ff971e;
    font-weight: 900;
    border: 1px solid #ff971e;
    background-color: #f9d1cf;
    padding-left:120px
    cursor: pointer;
  `;

  const UnselectedButton = styled.button`
    width: 60px;
    height: 30px;
    border-radius: 8px;
    color: black;
    font-weight: 900;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
  `;

  const axios = require("axios");
  axios({
    method: "get",
    url: "/match/mypage/guide",
  }).then((res) => {
    console.log(res);
  });

  return (
    <div>
      <form action="post">
        <div
          className={`fastmatching ${isChecked1 ? "checkbox-selected" : ""}`}
        >
          <div className="fastmatching_tie">
            <div className="fastmatching_title">
              &nbsp;&nbsp;&nbsp;봉사시작 &nbsp; &#124;
            </div>
            <div className="fastmatching_content">08.18 오후 1시</div>
          </div>
          <div className="fastmatching_tie">
            <div className="fastmatching_title">
              &nbsp; &nbsp;봉사장소 &nbsp; &#124;
            </div>
            <div className="fastmatching_content">숙명여자대학교</div>
          </div>
          <div className="fastmatching_content_specific">
            <div className="fastmatching_tie">
              <div className="fastmatching_box_title">선호 안내사</div>
              <div className="fastmatching_box_title">희망 서비스</div>
              <div className="fastmatching_box_title">시간</div>
            </div>
            <div className="fastmatching_tie">
              <div className="fastmatching_box_content">여성, 성인</div>
              <div className="fastmatching_box_content">인터넷 뱅킹 외</div>
              <div className="fastmatching_box_content">2</div>
            </div>
          </div>
          <hr />
          <div className="fastmatching_tie">
            <div className="fastmatching_title">마감까지 6일 남음</div>
            <div className="fastmatching_radio">
              {isChecked1 ? (
                <SelectedButton>
                  <label>
                    <input
                      type="radio"
                      name="apply"
                      className="matching_radio"
                      checked={isChecked1}
                      onChange={() => {
                        setIsChecked1(true);
                        setIsChecked2(false);
                      }}
                    />{" "}
                    선택됨
                  </label>
                </SelectedButton>
              ) : (
                <UnselectedButton>
                  <label>
                    <input
                      type="radio"
                      name="apply"
                      className="matching_radio"
                      checked={isChecked1}
                      onChange={() => {
                        setIsChecked1(true);
                        setIsChecked2(false);
                      }}
                    />
                    선택
                  </label>
                </UnselectedButton>
              )}
            </div>
          </div>
        </div>
        <br />
        <label>
          <button
            type="submit_bottom"
            onClick={goMain}
            className={
              isChecked1 || isChecked2 ? "submit_bottom" : "none-apply"
            }
          >
            수락하기
          </button>
        </label>
      </form>
    </div>
  );
};

export default HelperSuggestMatching_content;
