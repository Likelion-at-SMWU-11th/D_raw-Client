import React from "react";
import styled from "styled-components";
import "./static/HelperSuggestMatching.css";

const HelperSuggestMatching = () => {
  /*   const Apply_matching = styled.button`
    width: 340px;
    height: 50px;
    font-weight: 900;
    font-size: 15px;
    color: white;
    background-color: #ff971e;
    float: center;
    text-align: center;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    margin-left: -30px;
  `; */

  return (
    <div className="suggestmatching">
      <span className="icon">👀</span>
      <br /> <br />
      <span className="suggestmatching_content">
        제안을 기다리는 중입니다.{" "}
      </span>
      <br />
      <span className="suggestmatching_content">
        기다리는 동안 빠른 매칭에 지원해 보시겠어요?
      </span>
      <br />
      <button className="apply_matching">매칭 지원하기</button>
    </div>
  );
};

export default HelperSuggestMatching;
