import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
  margin-left: -20px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Title = styled.h3`
  font-weight: bold;
  text-align: left;
`;

const Describe = styled.p`
  font-weight: bold;
  color: solidgray;
  font-size: 15px;
  text-align: left;
`;

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const SquareButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  margin-top: 5px;
  margin-left: -20px;
`;

const SquareButton = styled.button`
  width: 120px;
  height: 50px;
  font-weight: bold;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 8px;
  border: 2px solid ${({ selected }) => (selected ? "orange" : "gray")};
  background-color: ${({ selected }) => (selected ? "orange" : "white")};
  cursor: pointer;
`;

const InputContainer = styled.div`
  margin-top: 5px;
  text-align: left;
`;

const TextInput = styled.textarea`
  width: 270px;
  height: 80px;
  resize: none;
  text-align: left;
`;

const MaxLengthIndicator = styled.span`
  font-size: 12px;
  color: gray;
  float: right;
`;

const NextButton = styled.button`
  padding: 10px 140px;
  margin-left: -20px;
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
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const [preferredGender, setPreferredGender] = useState("");
  const [selectedCareNeeds, setSelectedCareNeeds] = useState([]);
  const [additionalInquiry, setAdditionalInquiry] = useState("");

  const handleGenderChange = (event) => {
    setPreferredGender(event.target.value);
  };

  const handleCareNeedToggle = (careNeed) => {
    if (selectedCareNeeds.includes(careNeed)) {
      setSelectedCareNeeds(
        selectedCareNeeds.filter((item) => item !== careNeed)
      );
    } else {
      if (selectedCareNeeds.length < 2) {
        setSelectedCareNeeds([...selectedCareNeeds, careNeed]);
      }
    }
  };

  const handleAdditionalInquiryChange = (event) => {
    const inputText = event.target.value;
    setAdditionalInquiry(inputText);
  };

  const isFormValid =
    preferredGender !== "" &&
    selectedCareNeeds.length > 0 &&
    additionalInquiry !== "";

  const handleNextClick = async () => {
    try {
      const dataToSend = {
        preferredGender,
        selectedCareNeeds,
        additionalInquiry,
      };

      const response = await axios.post("/match/4", dataToSend);
      console.log("서버 응답:", response.data);

      navigate("/match/check");
    } catch (error) {
      console.error("에러:", error);
    }
  };

  return (
    <Service4Container>
      <Heading>
        <img
          src="/images/back.png"
          alt="back"
          className="GoBackButton"
          onClick={onBack}
          width="20"
          height="20"
        />
        매칭 신청
      </Heading>
      <hr />
      <Title>
        원하시는 디지털 서비스에 대해
        <br />
        자세히 알려주세요
      </Title>
      <Describe>선호하는 D:raw 안내사 성별</Describe>
      <RadioButtonContainer>
        <label>
          <RadioButton
            type="radio"
            name="preferredGender"
            value="male"
            onChange={handleGenderChange}
          />{" "}
          남성
        </label>
        <label>
          <RadioButton
            type="radio"
            name="preferredGender"
            value="female"
            onChange={handleGenderChange}
          />{" "}
          여성
        </label>
        <label>
          <RadioButton
            type="radio"
            name="preferredGender"
            value="all"
            onChange={handleGenderChange}
          />{" "}
          모두 가능
        </label>
      </RadioButtonContainer>
      <hr />
      <Describe>집중 케어 필요 항목 (최대 2개 선택)</Describe>
      <SquareButtonContainer>
        {[
          "모바일 뱅킹",
          "전자상거래",
          "공공 서비스",
          "전자 문서 처리",
          "소셜 미디어",
          "키오스크 이용",
        ].map((item) => (
          <SquareButton
            key={item}
            selected={selectedCareNeeds.includes(item)}
            onClick={() => handleCareNeedToggle(item)}
          >
            {item}
          </SquareButton>
        ))}
      </SquareButtonContainer>
      <hr />
      <Describe>안내사 매칭 추가 문의</Describe>
      <RadioButtonContainer>
        <label>
          <RadioButton
            type="radio"
            name="inquiry"
            value="preferred"
            onChange={() => {}}
          />{" "}
          성인 안내사 선호
        </label>
        <label>
          <RadioButton
            type="radio"
            name="inquiry"
            value="no_age_preference"
            onChange={() => {}}
          />{" "}
          연령 상관 없음
        </label>
      </RadioButtonContainer>
      <hr />
      <Describe>그 외 유의 사항 (선택)</Describe>
      <InputContainer>
        <TextInput
          value={additionalInquiry}
          onChange={handleAdditionalInquiryChange}
          maxLength="300"
          placeholder="반드시 만남 전에 숙지해야 할 사항에
          대하여 입력해주세요"
        />
        <MaxLengthIndicator>
          {additionalInquiry.length}/300자
        </MaxLengthIndicator>
      </InputContainer>
      <br />
      <Link to="/match/check">
        <NextButton disabled={!isFormValid} onClick={handleNextClick}>
          다음
        </NextButton>
      </Link>
    </Service4Container>
  );
};

export default Service4Page;
