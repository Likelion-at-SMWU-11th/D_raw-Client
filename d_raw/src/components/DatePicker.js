import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko"; // 한국어 locale 불러오기

import "react-datepicker/dist/react-datepicker.css";

registerLocale("ko", ko); // 한국어 locale 등록

const theme = {
  palette: {
    lightGray: "#ccc", // 해당 값은 실제 테마에 맞게 설정해주세요.
    orange: "orange", // 주황색 값 설정
  },
};

const DateContainer = styled.div`
  text-align: center;
`;

const SDatePicker = styled(DatePicker)`
  margin-top: 1.5rem;
  width: 200px;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid;
  font-size: 12px;
`;

const DateButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const DatePickerExample = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const renderSelectedDateButton = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      });

      return (
        <DateButton>
          <span style={{ color: theme.palette.orange }}>
            {formattedDate}
            &nbsp;&#9898;
          </span>
        </DateButton>
      );
    }
    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <DateContainer>
        <SDatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          placeholderText="클릭하여 날짜 선택"
          locale="ko"
          dateFormat="yyyy년 MM월 dd일"
          selectsStart
          startDate={selectedDate}
          endDate={selectedDate}
        />
        {renderSelectedDateButton()}
      </DateContainer>
    </ThemeProvider>
  );
};

export default DatePickerExample;
