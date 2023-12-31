// ServicePage.js
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "./DatePicker";
import TimePickerComponent from "./TimePicker";

const theme = {
  palette: {
    lightGray: "#ccc",
    orange: "orange",
  },
};

const ServiceContainer = styled.div`
  text-align: center;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 20px;
`;

const Heading = styled.h3`
  font-weight: bold;
  margin-left: -20px;
`;

const Title = styled.h3`
  font-weight: bold;
  text-align: left;
`;

const NextButton = styled.button`
  position: fixed; /* 고정 위치 설정 */
  margin-top: 200px; /* 하단으로 고정 */
  margin-left: -10px; /* 중앙 정렬을 위해 왼쪽으로 절반 이동 */
  transform: translateX(-50%); /* 가운데 정렬 */
  padding: 10px 150px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  border: 3px solid ${(props) => (props.active ? "orange" : "#ff971e")};
  color: white;
  background: ${(props) => (props.active ? "#ff971e" : "orange")};
  white-space: nowrap;
  cursor: ${(props) => (props.active ? "pointer" : "default")};
`;

const Image = styled.img`
  width: 100%;
  height: 27px;
  margin-left: -20px;
`;

const Content = styled.h4`
  white-space: nowrap;
`;

const ServicePage = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(false);

  const [selectedDate, setSelectedDate] = useState(""); // 선택한 날짜를 저장하는 상태
  const [selectedTime, setSelectedTime] = useState(""); // 선택한 시간을 저장하는 상태

  // 날짜 선택 시 호출되는 함수
  const handleDateSelect = (date) => {
    setSelectedDate(date); // 선택한 날짜를 저장
    setIsDateSelected(true);
  };

  // 시간 선택 시 호출되는 함수
  const handleTimeSelect = (time) => {
    setSelectedTime(time); // 선택한 시간을 저장
    setIsTimeSelected(true);
  };

  const isNextButtonActive = isDateSelected && isTimeSelected; // 두 단계가 모두 선택되었을 때만 버튼 활성화

  const handleNextClick = async () => {
    try {
      // 클라이언트에서 서버로 전송할 데이터
      const dataToSend = {
        selectedDate: selectedDate, // 날짜 데이터
        selectedTime: selectedTime, // 시간 데이터
      };

      // axios.post를 사용하여 서버에 데이터 전송
      const response = await axios.post("/match/1", dataToSend);
      console.log("서버 응답:", response.data);

      // 다음 페이지로 이동
      navigate("/match/2");
    } catch (error) {
      console.error("에러:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ServiceContainer>
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
        <Image src="/images/step1.png" alt="step1" />
        <Title>
          도움이 필요한 날짜와 시간을
          <br />
          선택해주세요
        </Title>
        <br />
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <Content>날짜</Content>
          <DatePicker onSelect={handleDateSelect} />
        </div>
        <br />
        <br />
        <hr />
        <br />
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <Content>시작시간</Content>
          <TimePickerComponent onTimeSelect={handleTimeSelect} />
        </div>
        <Link to="/match/2">
          <NextButton active={isNextButtonActive} onClick={handleNextClick}>
            다음
          </NextButton>
        </Link>
      </ServiceContainer>
    </ThemeProvider>
  );
};

export default ServicePage;
