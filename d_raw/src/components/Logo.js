// src/components/Logo.js
import React from "react";
import styled from "styled-components";
import logoImage from "../assets/logo.png"; // 로고 이미지 파일 경로

const LogoImage = styled.img`
  margin-top: -65px;
  margin-left: -30px;
  display: flex;
  width: 370px; // 로고 이미지의 크기를 조정
  height: auto; // 가로 세로 비율 유지
`;

const Logo = () => {
  return <LogoImage src={logoImage} alt="로고 이미지" />;
};

export default Logo;
