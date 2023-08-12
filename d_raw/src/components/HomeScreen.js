// src/components/HomeScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Homelogo from "./Homelogo";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 362px;
  height: 800px;
  background-color: #ff971e;
`;

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/main"); // 메인 스크린으로 전환
  };

  return (
    <HomeContainer>
      <Homelogo />
      <button onClick={handleContinueClick}>메인화면 가기</button>
    </HomeContainer>
  );
};

export default HomeScreen;
