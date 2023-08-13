import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Service3Container = styled.div`
  text-align: center;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 20px;
  position: relative;
`;

const Heading = styled.h3`
  font-weight: bold;
`;

const Title = styled.h3`
  font-weight: bold;
  text-align: left;
`;

const Describe = styled.p`
  font-size: 14px;
  text-align: left;
`;

const Image = styled.img`
  width: 100%;
  height: 23px;
`;

const NextButton = styled.button`
  padding: 10px 160px;
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

const Service3Page = () => {
  return (
    <Service3Container>
      <Heading>매칭 신청</Heading>
      <hr />
      <Image src="step3.png" alt="step3" />
      <Title>
        안내를 받으실 디지털 약자에
        <br />
        대해알려주세요
      </Title>
      <br />
      <div align="left">
        <p>
          <strong>시각장애 여부</strong>
        </p>
        <p>
          <strong>출생년도</strong>
        </p>
        <p>
          <strong>성별</strong>
        </p>
      </div>
      <br />
      <br />
      <br />
      <Link to="/service4">
        <NextButton>다음</NextButton>
      </Link>
    </Service3Container>
  );
};

export default Service3Page;
