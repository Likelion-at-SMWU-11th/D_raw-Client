import React from "react";
import styled from "styled-components";
import logoImage from "../assets/homelogo.png"; // 로고 이미지 파일 경로

const LogoImage = styled.img`
  width: 362px; // 로고 이미지의 크기를 조정
  height: auto; // 가로 세로 비율 유지
  margin: 0px;
`;

const Homelogo = () => {
  return <LogoImage src={logoImage} alt="로고 이미지" />;
};

export default Homelogo;
