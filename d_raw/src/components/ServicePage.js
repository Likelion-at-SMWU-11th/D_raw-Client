import React from "react";
import styled from "styled-components";
import DatePicker from "./DatePicker";

const ServiceContainer = styled.div`
  text-align: center;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 20px;
`;

const Heading = styled.h3`
  font-weight: bold;
`;

const Title = styled.h3`
  font-weight: extra bold;
  text-align: left;
`;

const NextButton = styled.button`
  padding: 10px 150px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  border: 3px solid orange;
  color: white;
  background: #ff971e;
  white-space: nowrap;
`;

const ServicePage = () => {
  return (
    <ServiceContainer>
      <Heading>매칭 신청</Heading>
      <hr />
      <Title>
        도움이 필요한 날짜와 시간을
        <br />
        선택해주세요
      </Title>
      <br />
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <h4>날짜</h4>
        <div style={{ marginLeft: "80px", textAlign: "center" }}>
          <DatePicker />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <h4>시작시간</h4>
      </div>
      <br />
      <br />
      <NextButton>다음</NextButton>
    </ServiceContainer>
  );
};

export default ServicePage;
