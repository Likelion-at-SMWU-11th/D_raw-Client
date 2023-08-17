import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HelperComponent = styled.div`
  text-align: center;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 20px;
  position: relative;
`;

const Part = styled.div`
  margin-left: 20px;
`;

const Part2 = styled.div`
  margin-left: 25px;
  margin-top: -20px;
`;

const Part3 = styled.hr`
  border: 5px solid #ccc; /* 회색 선을 설정합니다 */
  border-width: 0 0 5px 0; /* 선의 아래쪽만 2px 두껍게 설정합니다 */
  width: 330px;
  margin-left: -25px;
`;

const Part4 = styled.div`
  width: 350px;
  margin-left: -20px;
`;

const Heading = styled.h3`
  font-weight: bold;
  margin-left: -20px;
`;

const Image = styled.img`
  margin-top: -9px;
  margin-left: -30px;
  display: flex;
  width: 362px; // 로고 이미지의 크기를 조정
  height: auto; // 가로 세로 비율 유지
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 가로 정렬과 간격 조절 */
  margin-top: 10px; /* 버튼과 상단 간격 설정 */
`;

const NextButton = styled.button`
  padding: 10px 140px;
  margin-left: -43px;
  margin-top: 33px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  border: 3px solid orange;
  color: white;
  background: #ff971e;
  white-space: nowrap;
  cursor: pointer;
`;

const HelperDetail = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };

  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <HelperComponent>
      <Heading>
        <img
          src="/images/back.png"
          className="GoBackButton"
          onClick={onBack}
          width="20"
          height="20"
        />
        안내사 프로필
      </Heading>
      <hr />
      <Image src="./images/songdetail.png" alt="song" />
      <Part>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <p>
            <strong>안내사 활동</strong>
          </p>
          <div style={{ marginLeft: "80px", textAlign: "left" }}>
            <p>
              <strong>도장</strong>
            </p>
          </div>
        </div>
      </Part>
      <Part2>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <h3>1년 미만</h3>
          <div style={{ marginLeft: "80px", textAlign: "left" }}>
            <h3>🏆78</h3>
          </div>
        </div>
      </Part2>
      <hr />
      <ButtonContainer>
        <div>
          <button
            className={`helper_matching_button ${
              activeComponent === "A" ? "active" : ""
            }`}
            onClick={() => handleComponentClick("A")}
            disabled={activeComponent === "A"}
          >
            정보
          </button>
        </div>
        <div>
          <button
            className={`helper_matching_button ${
              activeComponent === "B" ? "active" : ""
            }`}
            onClick={() => handleComponentClick("B")}
            disabled={activeComponent === "B"}
          >
            후기(78)
          </button>
        </div>
      </ButtonContainer>
      <hr />
      <div>
        {activeComponent === "A" && (
          <div>
            <h3 align="left">
              안녕하세요😊
              <br />
              D:raw 안내사 김눈송입니다.
            </h3>
            <div
              style={{
                marginLeft: "-10px",
                marginTop: "-8px",
                textAlign: "left",
              }}
            >
              <p>여성 | 21세</p>
            </div>
            <Part3 />
            <h3 align="left">경력</h3>
            <p align="left">
              <strong>
                총 봉사 경력
                <br />
                <br />
                D:raw와 함께한 시간
              </strong>
            </p>
            <div
              style={{
                marginLeft: "190px",
                marginTop: "-83px",
                textAlign: "left",
              }}
            >
              <p>
                <strong>
                  1년 8개월
                  <br />
                  <br />
                  1년 미만
                </strong>
              </p>
            </div>
            <NextButton>선택하기</NextButton>
          </div>
        )}
        {activeComponent === "B" && (
          <Part4>
            <div>
              <p align="left">
                <strong>
                  🏅 칭찬 도장을 선물했어요! <br />
                </strong>
                *******1234
              </p>
              <div
                style={{
                  marginLeft: "155px",
                  marginTop: "-35px",
                  textAlign: "left",
                }}
              >
                <p>2023년 8월 2일</p>
              </div>
              <hr />
              <p align="left">
                엄마가 매우 만족하시고 모르는 점 많이 물어보셨는데 친절하게
                알려주셨대요. 감사합니다.
              </p>
              <Part3 />
              <div>
                <p align="left">
                  <strong>
                    🏅 칭찬 도장을 선물했어요! <br />
                  </strong>
                  *******5678
                </p>
                <div
                  style={{
                    marginLeft: "130px",
                    marginTop: "-35px",
                    textAlign: "left",
                  }}
                >
                  <p>2023년 7월 18일</p>
                </div>
                <hr />
                <p align="left">
                  저희 딸에게 가족보다 더 잘 도와주고 친절하셨어요. 가족들이
                  감동받았네요.^^
                </p>
              </div>
            </div>
          </Part4>
        )}
      </div>
    </HelperComponent>
  );
};

export default HelperDetail;
