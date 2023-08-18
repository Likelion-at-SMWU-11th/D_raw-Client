import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "./HelperFooter";

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

const BoxContainer = styled.div`
  margin-left: -40px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  white-space: nowrap;
`;

const Box = styled.div`
  border: 2px solid #ccc;
  margin-left: 7px;
  margin-top: 8px;
  width: 350px;
  padding: 5px;
  hite-space: nowrap;
  flex-direction: column;
`;

const YetButton = styled.button`
  padding: 11px 105px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  border: 3px #f9d1cf;
  color: white;
  background: #f9d1cf;
`;

const CompleteButton = styled.button`
  padding: 11px 120px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  border: 3px #d9d9d9;
  color: 878181;
  background: #d9d9d9;
  white-space: nowrap;
`;

const Name = styled.h2`
  color: #ff971e;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: -10px;
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
  margin-top: 23px;
  margin-left: 10px;
  width: 80px;
  height: 80px;
`;

const HelperMyMatching = () => {
  const navigate = useNavigate();

  const [matchingData, setMatchingData] = useState([]);

  const getUserMatchingData = async () => {
    try {
      const matchingResponse = await axios.get("/match/mypage/guide");
      setMatchingData(matchingResponse.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserMatchingData();
  }, []);

  const handleContinueClick = () => {
    navigate("/volunteerlog");
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
            <Image src="/images/painting.png" alt="painting" />
            <div style={{ marginLeft: "5px", textAlign: "center" }}>
              <Name>D:raw</Name>
              <h2>✔ 안내예정</h2>
              <p>2023.08.01(화) 오전 10시~11시</p>
            </div>
          </div>
          <YetButton>매칭 취소하기</YetButton>
        </Box>
        <Box>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Image src="/images/painting.png" alt="painting" />
            <div style={{ marginLeft: "5px", textAlign: "center" }}>
              <Name>D:raw</Name>
              <h2>✔ 지급 완료</h2>
              <p>2023.08.18(금) 오후 1시~3시</p>
            </div>
          </div>
          <MatchingButton onClick={handleContinueClick}>
            봉사 일지 작성
          </MatchingButton>
        </Box>
        <Box>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <Image src="/images/painting.png" alt="painting" />
            <div style={{ marginLeft: "5px", textAlign: "center" }}>
              <Name>D:raw</Name>
              <h2>✔ 지급 완료</h2>
              <p>2023.08.01(화) 오전 10시~11시</p>
            </div>
          </div>
          <CompleteButton>작성 완료</CompleteButton>
        </Box>
      </BoxContainer>
      <hr />
      <Footer />
    </MatchingContainer>
  );
};

export default HelperMyMatching;
