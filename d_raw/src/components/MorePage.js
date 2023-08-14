import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Box = styled.div`
  border: 2px solid #ccc;
  padding: 10px;
  background: #e6e6e6;
  border: 3px #e6e6e6;
  white-space: nowrap;
  font-size: 13.5px;
  text-align: left;
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
        <BoxContainer>
          <Box>설정</Box>
        </BoxContainer>
        <Link to="/account">계정</Link>
        <hr />
        <p>앱 알림</p>
        <BoxContainer>
          <Box>서비스 이용</Box>
        </BoxContainer>
        <p>D:raw 서비스 이용내역</p>
        <BoxContainer>
          <Box>고객센터</Box>
        </BoxContainer>
        <Link to="/notice">공지사항</Link>
        <hr />
        <Link to="/question">자주 묻는 질문</Link>
        <hr />
        <p>1:1 채팅 상담</p>
        <p>평일 09:00~18:00, 점심시간 13:00~14:00</p>
        <br />
        <BoxContainer>
          <Box>
            <h4>D:raw 고객센터 1588-1588</h4>
            <p>평일 오전 9시~오후 6시, 점심시간 오후 1시~2시</p>
            *주말은 기초상담, 긴급문의 접수만 가능
            <p>사업자정보확인 | 이용약관 | 개인정보처리방침</p>
          </Box>
        </BoxContainer>
        <Footer />
      </LeftAlignedHeading>
    </MoreContainer>
  );
};

export default MorePage;
