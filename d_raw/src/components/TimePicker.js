// TimePickerComponent.js
import React, { useState } from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ClockToggle = styled.div`
  cursor: pointer;
  margin-right: 10px;
`;

const TimePickerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TimePicker = styled.select`
  margin-right: 10px;
`;

const SelectedTime = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;

const TimePickerComponent = ({ onTimeSelect }) => {
  const [isTimePickerOpen, setTimePickerOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("오전");
  const [isTimeSelected, setTimeSelected] = useState(false);

  const handleTimeToggle = () => {
    setTimePickerOpen(!isTimePickerOpen);
  };

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
      <ToggleContainer>
        <ClockToggle onClick={handleTimeToggle}>
          <p>🔽</p>
        </ClockToggle>
        {isTimePickerOpen && (
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
            <button
              onClick={handleTimeSelect}
              disabled={!isTimePickerOpen || isTimeSelected}
            >
              선택
            </button>
          </TimePickerContainer>
        )}
        {isTimePickerOpen && isTimeSelected && (
          <SelectedTime>
            {selectedPeriod} {selectedTime}시
          </SelectedTime>
        )}
      </ToggleContainer>
    </div>
  );
};

export default TimePickerComponent;
