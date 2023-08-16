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
  margin-left: -16px;
  margin-bottom: 0px;
  width: 150px;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid;
  font-size: 12px;
`;

const SelectedDate = styled.div`
  width: 150px;
  margin-left: -10px;
  margin-top: 0.5rem;
  display: inline-block;
  padding: 10px;
  border: 2px solid ${theme.palette.orange};
  border-radius: 20px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background: orange;
`;

const DatePickerExample = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const renderSelectedDate = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toLocaleDateString("ko-KR", {
        month: "short",
        day: "2-digit",
      });
      const selectedCompleteText = `${formattedDate} 선택완료`;

      return <SelectedDate>{selectedCompleteText}</SelectedDate>;
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
      </DateContainer>
      <br />
      {renderSelectedDate()}
    </ThemeProvider>
  );
};

export default DatePickerExample;
