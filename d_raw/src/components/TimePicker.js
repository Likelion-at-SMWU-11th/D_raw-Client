import React, { useState } from "react";
import styled from "styled-components";

const TimePickerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 23px;
  margin-left: 20px;
  padding: 5px;
`;

const TimePicker = styled.select`
  margin-right: 10px;
`;

const SelectedTime = styled.div`
  font-weight: bold;
  margin-top: 10px;
  white-space: nowrap;
`;

const TimePickerComponent = ({ onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("오전");
  const [isTimeSelected, setTimeSelected] = useState(false);

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  const handleTimeSelect = () => {
    setTimeSelected(true);
  };

  return (
    <div style={{ marginLeft: "0px", textAlign: "center" }}>
      <TimePickerContainer>
        <select onChange={handlePeriodChange}>
          <option value="오전">오전</option>
          <option value="오후">오후</option>
        </select>
        <TimePicker onChange={handleTimeChange}>
          {[...Array(12)].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}시
            </option>
          ))}
        </TimePicker>
        <button onClick={handleTimeSelect} disabled={isTimeSelected}>
          선택
        </button>
      </TimePickerContainer>
      {isTimeSelected && (
        <SelectedTime>
          {selectedPeriod} {selectedTime}시
        </SelectedTime>
      )}
    </div>
  );
};

export default TimePickerComponent;
