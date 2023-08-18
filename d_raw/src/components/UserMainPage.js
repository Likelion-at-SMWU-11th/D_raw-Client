import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Logo from "./Logo";
import ApplyButton from "../ApplyButton";
import UserFooter from "./UserFooter";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 20px;
`;

const MainImage = styled.img`
  margin-left: -15px;
  width: 70px;
  height: 70px;
`;

const LeftAlignedHeading = styled.div`
  font-weight: bold;
  text-align: left;
  margin-left: -5px;
  margin-top: -27px;
  padding: 5px;
`;

const Part = styled.div`
  margin-left: -1px;
  margin-top: 7px;
`;

const MainScreen = () => {
  const [topGuides, setTopGuides] = useState([]);

  useEffect(() => {
    // axios.get 요청을 useEffect 내에서 사용하여 데이터 가져오기
    async function fetchData() {
      try {
        const response = await axios.get("/main/user");
        setTopGuides(response.data); // 가져온 데이터를 상태로 설정
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <MainContainer>
      <Logo />
      <ApplyButton />
      <hr />
      <LeftAlignedHeading>
        <h3>우수 D:raw 안내사</h3>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <MainImage src="/images/song.png" alt="song" />
          <div
            style={{
              marginLeft: "10px",
              marginTop: "-5px",
              textAlign: "center",
            }}
          >
            <p>
              <strong>
                1. 김눈*
                <br />
                🏅(75)
              </strong>
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <MainImage src="/images/wade.jpg" alt="wade" />
          <div
            style={{
              marginLeft: "10px",
              marginTop: "-5px",
              textAlign: "center",
            }}
          >
            <p>
              <strong>
                2. 웨이*
                <br />
                🏅(61)
              </strong>
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <MainImage src="/images/lion.jpg" alt="lion" />
          <div
            style={{
              marginLeft: "10px",
              marginTop: "-5px",
              textAlign: "center",
            }}
          >
            <p>
              <strong>
                3.김사*
                <br />
                🏅(45)
              </strong>
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <MainImage src="/images/dog.jpg" alt="dog" />
          <div
            style={{
              marginLeft: "10px",
              marginTop: "-5px",
              textAlign: "center",
            }}
          >
            <p>
              <strong>
                4. 이댕*
                <br />
                🏅(41)
              </strong>
            </p>
          </div>
        </div>
        <hr />
        <Part>
          <UserFooter />
        </Part>
      </LeftAlignedHeading>
    </MainContainer>
  );
};

export default MainScreen;
