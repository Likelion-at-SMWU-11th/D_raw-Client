import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IconWithText from "./IconWithText";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  height: 80px;
  background-color: white;
`;

const Footer = () => {
  const icons = [
    { imageSrc: "homeicon.png", text: "홈" },
    { imageSrc: "schedule.png", text: "내 매칭" },
    { imageSrc: "counsel.png", text: "상담하기" },
    { imageSrc: "etc.png", text: "더보기" },
    // 추가 아이콘 및 텍스트
  ];

  return (
    <FooterContainer>
      {icons.map((icon, index) => (
        <Link to={`/page${index + 1}`} key={index}>
          <IconWithText imageSrc={icon.imageSrc} text={icon.text} />
        </Link>
      ))}
    </FooterContainer>
  );
};

export default Footer;
