import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const MatchingContainer = styled.div`
  text-align: center;
  flex-direction: column;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 20px;
`;

const Heading = styled.h3`
  font-weight: bold;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Box = styled.div`
  border: 2px solid #ccc;
  padding: 20px;
`;

const YetButton = styled.button`
  padding: 10px 100px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  border: 3px #f9d1cf;
  color: white;
  background: #f9d1cf;
`;

const MatchingButton = styled.button`
  padding: 10px 100px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  border: 3px solid orange;
  color: white;
  background: #ff971e;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const MatchingPage = () => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/compliment");
  };

  return (
    <MatchingContainer>
      <Heading>매칭 내역</Heading>
      <hr />
      <BoxContainer>
        <Box>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Image src="who.png" alt="who" />
            <div style={{ marginLeft: "10px", textAlign: "center" }}>
              <h4>D:raw</h4>
              <h3>💬 매칭 중</h3>
              <p>2023.08.29(화) 오후 4시~5시</p>
            </div>
          </div>
          <YetButton>매칭 취소하기</YetButton>
        </Box>
        <Box>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Image src="song.png" alt="song" />
            <div style={{ marginLeft: "10px", textAlign: "center" }}>
              <h4>D:raw</h4>
              <h3>✔ 이용 예정</h3>
              <p>2023.08.25(금) 오후 1시~3시</p>
            </div>
          </div>
          <MatchingButton>매칭 취소하기</MatchingButton>
        </Box>
        <Box>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Image src="lion.png" alt="lion" />
            <div style={{ marginLeft: "10px", textAlign: "center" }}>
              <h4>D:raw</h4>
              <h3>✔ 이용 완료</h3>
              <p>2023.08.18(금) 오후 1시~3시</p>
            </div>
          </div>
          <MatchingButton onClick={handleContinueClick}>
            칭찬 도장 주기
          </MatchingButton>
        </Box>
      </BoxContainer>
      <div>
        <hr />
      </div>
      <Footer />
    </MatchingContainer>
  );
};

export default MatchingPage;
