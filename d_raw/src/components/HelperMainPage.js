import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import ApplyButton from "../ApplyButton";
import HelperFooter from "./HelperFooter";

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
  margin-top: -25px;
  padding: 5px;
`;

const HelperMain = () => {
  return (
    <MainContainer>
      <Logo />
      <ApplyButton />
      <hr />
      <LeftAlignedHeading>
        <h3>우수 D:raw 안내사</h3>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <MainImage src="song.png" alt="song" />
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
          <MainImage src="wade.jpg" alt="wade" />
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
          <MainImage src="lion.jpg" alt="lion" />
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
          <MainImage src="dog.jpg" alt="dog" />
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
        <HelperFooter />
      </LeftAlignedHeading>
    </MainContainer>
  );
};

export default HelperMain;
