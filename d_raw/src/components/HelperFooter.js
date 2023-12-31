import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  margin-top: 7px;
  margin-left: -45px;
  width: 362px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  height: 75px;
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

const HelperFooter = () => {
  const icons = [
    { imageSrc: "images/homeicon.png", text: "홈", size: "25px" },
    { imageSrc: "images/schedule.png", text: "내 매칭", size: "25px" },
    { imageSrc: "images/service.png", text: "서비스 신청", size: "60px" },
    { imageSrc: "images/counsel.png", text: "상담하기", size: "30px" },
    { imageSrc: "images/etc.png", text: "더보기", size: "30px" },
    // 추가 아이콘 및 텍스트
  ];

  return (
    <FooterContainer>
      <Link to="/main/guide">
        <IconWithText
          imageSrc={icons[0].imageSrc}
          text={icons[0].text}
          size={icons[0].size}
        />
      </Link>

      {/* '내 매칭', '상담하기', '더보기' 아이콘은 Link를 통해 각각의 페이지로 이동하도록 설정합니다 */}
      <Link to="/match/mypage/guide">
        <IconWithText
          imageSrc={icons[1].imageSrc}
          text={icons[1].text}
          size={icons[1].size}
        />
      </Link>
      <Link to="/match/1">
        <IconWithText
          imageSrc={icons[2].imageSrc}
          text={icons[2].text}
          size={icons[2].size}
        />
      </Link>
      <a href="https://open.kakao.com/o/s8e9uRzf">
        <IconWithText
          imageSrc={icons[3].imageSrc}
          text={icons[3].text}
          size={icons[3].size}
        />
      </a>
      <Link to="/helpermore">
        <IconWithText
          imageSrc={icons[4].imageSrc}
          text={icons[4].text}
          size={icons[4].size}
        />
      </Link>
    </FooterContainer>
  );
};

export default HelperFooter;
