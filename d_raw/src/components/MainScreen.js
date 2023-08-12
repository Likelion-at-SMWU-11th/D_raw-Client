import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import ApplyButton from "../ApplyButton";
import Footer from "./Footer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 20px;
`;

const MainImage = styled.img`
  width: 70px;
  height: 70px;
`;

const LeftAlignedHeading = styled.div`
  font-weight: bold;
  text-align: left;
  margin: 5px;
  padding: 5px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MainScreen = () => {
  return (
    <MainContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <ApplyButton />
      <LeftAlignedHeading>
        <h3>우수 D:raw 안내사</h3>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <MainImage src="song.png" alt="song" />
          <div style={{ marginLeft: "10px", textAlign: "center" }}>
            <p>
              1. 김눈*
              <br />
              🏅(75)
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <MainImage src="wade.png" alt="wade" />
          <div style={{ marginLeft: "10px", textAlign: "center" }}>
            <p>
              2. 웨이*
              <br />
              🏅(61)
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <MainImage src="lion.png" alt="lion" />
          <div style={{ marginLeft: "10px", textAlign: "center" }}>
            <p>
              3.김사*
              <br />
              🏅(45)
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <MainImage src="dog.png" alt="dog" />
          <div style={{ marginLeft: "10px", textAlign: "center" }}>
            <p>
              4. 이댕*
              <br />
              🏅(41)
            </p>
          </div>
        </div>
        <br />
        <hr />
        <Footer />
      </LeftAlignedHeading>
    </MainContainer>
  );
};

export default MainScreen;
