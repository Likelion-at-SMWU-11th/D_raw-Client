import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "./UserFooter";

const MatchingContainer = styled.div`
  text-align: center;
  flex-direction: column;
  width: 362px;
  height: 800px;
  padding: 20px;
`;

const Heading = styled.h3`
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: -20px;
  font-weight: bold;
`;

const Name = styled.h2`
  color: #ff971e;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: -10px;
`;

const BoxContainer = styled.div`
  margin-left: -40px;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  white-space: nowrap;
`;

const Box = styled.div`
  border: 2px solid #ccc;
  margin-left: 7px;
  width: 350px;
  padding: 6px;
  hite-space: nowrap;
  flex-direction: column;
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
  white-space: nowrap;
`;

const Image = styled.img`
  margin-top: 15px;
  width: 100px;
  height: 100px;
`;

const UserMyMatching = () => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/compliment");
  };

  return (
    <MatchingContainer>
      <Heading>
        매칭 내역
        <hr />
      </Heading>
      <BoxContainer>
        <Box>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Image src="who.png" alt="who" />
            <div style={{ marginLeft: "5px", textAlign: "center" }}>
              <Name>D:raw</Name>
              <h2>💬 매칭 중</h2>
              <p>2023.08.29(화) 오후 4시~5시</p>
            </div>
          </div>
          <YetButton>매칭 취소하기</YetButton>
        </Box>
        <Box>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Image src="song.png" alt="song" />
            <div style={{ marginLeft: "5px", textAlign: "center" }}>
              <Name>D:raw</Name>
              <h2>✔ 이용 예정</h2>
              <p>2023.08.25(금) 오후 1시~3시</p>
            </div>
          </div>
          <MatchingButton>매칭 취소하기</MatchingButton>
        </Box>
        <Box>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Image src="lion.png" alt="lion" />
            <div style={{ marginLeft: "5px", textAlign: "center" }}>
              <Name>D:raw</Name>
              <h2>✔ 이용 완료</h2>
              <p>2023.08.18(금) 오후 1시~3시</p>
            </div>
          </div>
          <MatchingButton onClick={handleContinueClick}>
            칭찬 도장 주기
          </MatchingButton>
        </Box>
      </BoxContainer>
      <hr />
      <Footer />
    </MatchingContainer>
  );
};

export default UserMyMatching;
