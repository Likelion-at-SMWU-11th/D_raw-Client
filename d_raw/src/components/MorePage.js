import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const MoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 20px;
`;

const LeftAlignedHeading = styled.div`
  font-weight: bold;
  text-align: left;
  margin: 5px;
  padding: 5px;
`;

const Heading = styled.h3`
  font-weight: bold;
`;

const MoreButton = styled.button`
  padding: 5px 150px;
  display: block; /* 요소를 블록 레벨로 변경 */
  width: 100%; /* 전체 너비를 차지하도록 설정 */
  text-align: left; /* 내부 텍스트를 왼쪽 정렬 */
  font-size: 1rem;
  font-weight: bold;
  border: 0px white;
  margin: 5px;
  color: black;
  background: white;
`;

const MorePage = () => {
  return (
    <MoreContainer>
      <LeftAlignedHeading>
        <Heading>
          <div>
            <h4>안녕하세요. 김눈송님!</h4>
          </div>
        </Heading>
        <p>설정</p>
        <MoreButton>계정</MoreButton>
        <hr />
        <p>앱 알림</p>
        <p>서비스 이용</p>
        <p>D:raw 서비스 이용내역</p>
        <p>고객센터</p>
        <p>공지사항</p>
        <hr />
        <p>자주 묻는 질문</p>
        <hr />
        <p>1:1 채팅 상담</p>
        <hr />
        <Footer />
      </LeftAlignedHeading>
    </MoreContainer>
  );
};

export default MorePage;
