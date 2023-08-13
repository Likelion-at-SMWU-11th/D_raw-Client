import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Service4Container = styled.div`
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
  height: 22px;
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

const Service4Page = () => {
  return (
    <Service4Container>
      <Heading>매칭 신청</Heading>
      <hr />
      <Image src="step4.png" alt="step4" />
      <Title>
        원하시는 디지털 서비스에 대해
        <br />
        자세히 알려주세요
      </Title>
      <br />

      <NextButton>다음</NextButton>
    </Service4Container>
  );
};

export default Service4Page;
