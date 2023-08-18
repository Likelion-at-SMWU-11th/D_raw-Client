import React, { useState, useEffect } from "react";
import axios from "axios";
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

const Part = styled.div`
  margin-left: 3px;
`;

const UserMyMatching = () => {
  const navigate = useNavigate();

  const [matchingData, setMatchingData] = useState([]);

  const getUserMatchingData = async () => {
    try {
      const matchingResponse = await axios.get("/match/mypage/user");
      setMatchingData(matchingResponse.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserMatchingData();
  }, []); // 빈 배열을 넣어 처음 마운트될 때 한 번만 실행되도록 설정

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
            <Image src="/images/who.png" alt="who" />
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
            <Image src="/images/song.png" alt="song" />
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
            <Image src="/images/lion.jpg" alt="lion" />
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
      <Part>
        <Footer />
      </Part>
    </MatchingContainer>
  );
};

export default UserMyMatching;
