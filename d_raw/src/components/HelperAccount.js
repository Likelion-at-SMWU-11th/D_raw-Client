import React from "react";
import styled from "styled-components";
import Footer from "./UserFooter";

const AccountContainer = styled.div`
  text-align: center;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 15px;
`;

const Heading = styled.h3`
  font-weight: bold;
`;

const SpacedText = styled.div`
  margin-top: 10px;
  white-space: nowrap;
`;

const Describe = styled.div`
  margin-left: -10px;
  white-space: nowrap;
`;

const HelperAccount = () => {
  return (
    <AccountContainer>
      <Heading>계정 설정</Heading>
      <hr />
      <SpacedText align="left">기본정보</SpacedText>
      <Describe>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <h3 align="left">
            이름
            <br />
            <br />
            휴대폰 번호
            <br />
            <br />
            이메일
          </h3>
          <div
            style={{
              marginLeft: "70px",
              marginTop: "5px",
              gap: "5px",
              textAlign: "right",
            }}
          >
            <p>
              김눈송
              <br />
              <br />
              010-1234-5678 <button>&gt;</button>
              <br />
              <br />
              ****@naver.com
            </p>
          </div>
        </div>
      </Describe>
      <hr />
      <SpacedText align="left">프로필 설정</SpacedText>
      <Describe>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <h3 align="left">안내사 프로필 수정</h3>
          <button
            style={{
              marginLeft: "125px",
              marginTop: "20px",
              textAlign: "right",
            }}
          >
            &gt;
          </button>
        </div>
      </Describe>
      <hr />
      <SpacedText align="left">
        <h4>로그아웃</h4>{" "}
      </SpacedText>
      <hr />
      <SpacedText style={{ display: "flex", alignItems: "flex-start" }}>
        회원 정보를 모두 삭제하시겠어요?
        <div style={{ marginLeft: "5px", textAlign: "right" }}>회원탈퇴</div>
      </SpacedText>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <Footer />
    </AccountContainer>
  );
};

export default HelperAccount;