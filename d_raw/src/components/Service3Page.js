import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
  margin-left: -20px;
`;

const Title = styled.h3`
  font-weight: bold;
  text-align: left;
`;

const Image = styled.img`
  width: 100%;
  height: 23px;
  margin-left: -20px;
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

const ScrollableNumberPicker = styled.select`
  width: 80px;
  font-size: 16px;
  padding: 5px;
`;

const YearLabel = styled.span`
  margin-left: 5px;
  color: black;
`;

const RadioButtonContainer = styled.div`
  text-align: left;
  margin-top: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const Service3Page = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const [selectedBirthYear, setSelectedBirthYear] = useState(2023);
  const [selectedVisualImpairment, setSelectedVisualImpairment] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const handleYearChange = (event) => {
    setSelectedBirthYear(event.target.value);
  };

  const handleVisualImpairmentChange = (event) => {
    setSelectedVisualImpairment(event.target.value);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const isFormValid = selectedVisualImpairment && selectedGender;

  const handleNextClick = async () => {
    try {
      const dataToSend = {
        birthYear: selectedBirthYear,
        visualImpairment: selectedVisualImpairment,
        gender: selectedGender,
      };

      const response = await axios.post("/match/3", dataToSend);
      console.log("서버 응답:", response.data);

      navigate("/match/4");
    } catch (error) {
      console.error("에러:", error);
    }
  };

  return (
    <Service3Container>
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
      <Image src="/images/step3.png" alt="step3" />
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
        <RadioButtonContainer>
          <label>
            <RadioButton
              type="radio"
              name="visualImpairment"
              value="none"
              onChange={handleVisualImpairmentChange}
            />{" "}
            없음
          </label>
          <label>
            <RadioButton
              type="radio"
              name="visualImpairment"
              value="mild"
              onChange={handleVisualImpairmentChange}
            />{" "}
            경증 장애
          </label>
          <label>
            <RadioButton
              type="radio"
              name="visualImpairment"
              value="severe"
              onChange={handleVisualImpairmentChange}
            />{" "}
            중증 장애
          </label>
        </RadioButtonContainer>
        <br />
        <hr />
        <p>
          <strong>출생년도</strong>
        </p>
        <br />
        <ScrollableNumberPicker
          value={selectedBirthYear}
          onChange={handleYearChange}
        >
          {Array.from({ length: 124 }, (_, index) => (
            <option key={2023 - index} value={2023 - index}>
              {2023 - index}
            </option>
          ))}
        </ScrollableNumberPicker>
        <YearLabel>년</YearLabel>
        <br />
        <br />
        <hr />
        <p>
          <strong>성별</strong>
        </p>
        <RadioButtonContainer>
          <label>
            <RadioButton
              type="radio"
              name="gender"
              value="female"
              onChange={handleGenderChange}
            />{" "}
            여성
          </label>
          <label>
            <RadioButton
              type="radio"
              name="gender"
              value="male"
              onChange={handleGenderChange}
            />{" "}
            남성
          </label>
        </RadioButtonContainer>
      </div>
      <br />
      <br />
      <br />
      <Link to="/match/4">
        <NextButton disabled={!isFormValid} onClick={handleNextClick}>
          다음
        </NextButton>
      </Link>
    </Service3Container>
  );
};

export default Service3Page;
