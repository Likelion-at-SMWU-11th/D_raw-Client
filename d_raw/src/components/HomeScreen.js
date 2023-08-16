// src/components/HomeScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Homelogo from "./Homelogo";

const HomeContainer = styled.div`
  display: flex;
  margin-left: -20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 362px;
  height: 800px;
  background-color: #ff971e;
`;

const NextButton = styled.button`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: space-between; /* 가로 간격을 최대로 늘리기 */
  padding: 10px 100px;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  margin-top: 40px;
  margin-bottom: 10px;
  width: 70%;
  border-radius: 8px;
  border: 3px solid white;
  color: white;
  background: #ff971e;
  white-space: nowrap;
  cursor: pointer;
`;

const SignupText = styled.span`
  margin-left: -15px;
  color: white;
  font-size: 18px;
`;

const ArrowIcon = styled.span`
  margin-left: 50px;
  color: white;
`;

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("login"); // 회원가입 창으로!
  };

  return (
    <HomeContainer>
      <Homelogo />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <NextButton onClick={handleContinueClick}>
        <SignupText>회원가입</SignupText>
        <ArrowIcon>&gt;</ArrowIcon>
      </NextButton>
    </HomeContainer>
  );
};

export default HomeScreen;
