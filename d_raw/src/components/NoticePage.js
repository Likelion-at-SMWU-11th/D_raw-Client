import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BackButton = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 9999; /* Ensure it's above other content */
`;

const BackIcon = styled.span`
  font-size: 24px;
`;

const NoticeContainer = styled.div`
  text-align: center;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 20px;
  position: relative;
  white-space: nowrap;
`;

const Heading = styled.h3`
  font-weight: bold;
  margin-left: -15px;
  margin-top: 0px;
  margin-bottom: 15px;
`;

const ToggleButton = styled.button`
  margin-top: 80px;
  margin-right: 20px;
  margin-left: 7px;
  padding: 15px 30px;
  font-weight: bold;
  font-size: 20px;
  background-color: ${(props) =>
    props.selected ? "orange" : "white"}; // 선택된 경우 주황색 배경
  color: ${(props) =>
    props.selected ? "white" : "black"}; // 선택된 경우 글자 흰색
  border: 3px solid orange;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
`;

const UserContent = styled.div`
  text-align: left;
  margin-top: 10px;
  margin-left: -10px;
  font-weight: bold;
  font-size: 20px;
  color: black;
`;

const Date = styled.p`
  font-size: 15px;
  margin-top: -10px;
  font-weight: normal;
  color: gray;
  text-align: left;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
`;

const NoticePage = () => {
  const [content, setContent] = useState("1"); // 초기 값은 '1'

  const handleContentToggle = (value) => {
    setContent(value);
  };

  return (
    <NoticeContainer>
      <BackButton to="/usermore">
        <BackIcon>&lt;</BackIcon>
      </BackButton>
      <Heading>공지사항</Heading>
      <hr />
      <ToggleButton
        selected={content === "1"} // 선택된 경우에만 'selected' 속성 추가
        onClick={() => handleContentToggle("1")}
      >
        이용자
      </ToggleButton>
      <ToggleButton
        selected={content === "3"} // 선택된 경우에만 'selected' 속성 추가
        onClick={() => handleContentToggle("3")}
      >
        안내사
      </ToggleButton>
      <ContentContainer>
        {content === "1" && (
          <>
            <UserContent>
              <div>
                <h5>D:raw 서비스 가능지역 안내</h5>
                <Date>2023.08.07</Date>
              </div>
              <hr />
              <div>
                <h5>D:raw 개인정보처리방침 개정 안내</h5>
                <Date>2023.07.21</Date>
              </div>
              <hr />
              <div>
                <h5>D:raw 이용약관 개정 안내</h5>
                <Date>2023.07.08</Date>
              </div>
              <hr />
              <div>
                <h5>D:raw 대표번호 변경 안내</h5>
                <Date>2023.07.01</Date>
              </div>
            </UserContent>
          </>
        )}
        {content === "3" && (
          <>
            <UserContent>
              <div>
                <h5>봉사 시간 등록 안내</h5>
                <Date>2023.08.05</Date>
              </div>
              <hr />
              <div>
                <h5>D:raw 개인정보처리방침 개정 안내</h5>
                <Date>2023.07.21</Date>
              </div>
              <hr />
              <div>
                <h5>D:raw 이용약관 개정 안내</h5>
                <Date>2023.07.08</Date>
              </div>
              <hr />
              <div>
                <h5>D:raw 대표번호 변경 안내</h5>
                <Date>2023.07.01</Date>
              </div>
            </UserContent>
          </>
        )}
      </ContentContainer>
    </NoticeContainer>
  );
};

export default NoticePage;
