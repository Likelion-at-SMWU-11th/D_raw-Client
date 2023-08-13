import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BackButton = styled(Link)`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 9999; /* Ensure it's above other content */
`;

const BackIcon = styled.span`
  font-size: 24px;
`;

const Service2Container = styled.div`
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

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AddressInput = styled(InputField)`
  margin-top: 20px; /* Add some space between the address inputs */
`;

const Service2Page = () => {
  const [addressInput, setAddressInput] = useState(""); // 사용자 입력을 관리할 상태
  const [detailAddressInput, setDetailAddressInput] = useState(""); // 상세 주소 입력을 관리할 상태

  const handleAddressChange = (event) => {
    setAddressInput(event.target.value);
  };

  const handleDetailAddressChange = (event) => {
    setDetailAddressInput(event.target.value);
  };

  return (
    <Service2Container>
      <BackButton to="/service">
        <BackIcon>&lt;</BackIcon>
      </BackButton>
      <Heading>매칭 신청</Heading>
      <hr />
      <Image src="step2.png" alt="step2" />
      <Title>
        안내사가 찾아갈 자택의 주소를
        <br />
        정확히 알려주세요
      </Title>
      <Describe>
        <InputField
          type="text"
          placeholder="도로명, 지번 혹은 병원명으로 검색"
          value={addressInput}
          onChange={handleAddressChange}
        />
        <AddressInput
          type="text"
          placeholder="상세 주소 입력"
          value={detailAddressInput}
          onChange={handleDetailAddressChange}
        />
      </Describe>
      <div align="left">
        <p>
          <strong>🔸건물명</strong>
          <br />
          (예: 건영빌라)
          <br />
        </p>
        <p>
          <strong>🔸도로명 + 건물번호</strong>
          <br />
          (예: 테헤란로 407)
          <br />
        </p>
        <p>
          <strong>🔸지역명 + 번지</strong>
          <br />
          (예: 삼성동 141-31)
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Link to="/service3">
        <NextButton>다음</NextButton>
      </Link>
    </Service2Container>
  );
};

export default Service2Page;
