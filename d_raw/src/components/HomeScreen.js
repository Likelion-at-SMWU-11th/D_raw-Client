// src/components/HomeScreen.js
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 362px;
  height: 800px;
  background-color: orange;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

const Content = styled.p`
  font-size: 16px;
  text-align: center;
  color: white;
`;

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/main"); // 메인 스크린으로 전환
  };

  return (
    <HomeContainer>
      <Title>D:raw</Title>
      <Content>
        디지털 이용 불편함,
        <br />
        이젠 디지털 안내사와 함께 해보세요!
      </Content>
      <button onClick={handleContinueClick}>Go to Main</button>
    </HomeContainer>
  );
};

export default HomeScreen;
