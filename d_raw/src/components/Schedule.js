// src/components/Logo.js
import React from "react";
import styled from "styled-components";
import logoImage from "../assets/schedule.png"; // 로고 이미지 파일 경로

const LogoImage = styled.img`
  width: 30px; // 로고 이미지의 크기를 조정
  height: auto; // 가로 세로 비율 유지
  margin: 0px;
`;

const Schedule = () => {
  return <LogoImage src={logoImage} alt="로고 이미지" />;
};

export default Schedule;
