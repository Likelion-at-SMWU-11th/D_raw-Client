import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  margin-left: -40px;
  width: 362px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  height: 80px;
  background-color: white;
  white-space: nowrap;
`;

const IconWithText = ({ imageSrc, text, size }) => {
  return (
    <div>
      <img
        src={process.env.PUBLIC_URL + `/${imageSrc}`}
        alt={text}
        style={{ width: size, height: "auto" }}
      />
      <p style={{ margin: 0 }}>{text}</p>
    </div>
  );
};

const Footer = () => {
  const icons = [
    { imageSrc: "homeicon.png", text: "홈", size: "25px" },
    { imageSrc: "schedule.png", text: "내 매칭", size: "25px" },
    { imageSrc: "service.png", text: "서비스 신청", size: "60px" },
    { imageSrc: "counsel.png", text: "상담하기", size: "30px" },
    { imageSrc: "etc.png", text: "더보기", size: "30px" },
    // 추가 아이콘 및 텍스트
  ];

  return (
    <FooterContainer>
      <Link to="/main">
        <IconWithText
          imageSrc={icons[0].imageSrc}
          text={icons[0].text}
          size={icons[0].size}
        />
      </Link>

      {/* '내 매칭', '상담하기', '더보기' 아이콘은 Link를 통해 각각의 페이지로 이동하도록 설정합니다 */}
      <Link to="/matching">
        <IconWithText
          imageSrc={icons[1].imageSrc}
          text={icons[1].text}
          size={icons[1].size}
        />
      </Link>
      <Link to="/service">
        <IconWithText
          imageSrc={icons[2].imageSrc}
          text={icons[2].text}
          size={icons[2].size}
        />
      </Link>
      <Link to="/counsel">
        <IconWithText
          imageSrc={icons[3].imageSrc}
          text={icons[3].text}
          size={icons[3].size}
        />
      </Link>
      <Link to="/more">
        <IconWithText
          imageSrc={icons[4].imageSrc}
          text={icons[4].text}
          size={icons[4].size}
        />
      </Link>
    </FooterContainer>
  );
};

export default Footer;
