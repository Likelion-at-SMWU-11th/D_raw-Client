import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./static/Base.css";
import "./static/SelectRegion.css";

const SelectRegion = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();
  /*   const [selectedValues, setSelectedValues] = useState(""); */

  const availableOptions = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주특별자치도",
  ];

  const handleOptionSelect = (option) => {
    setSelectedValue(option); // 선택된 값만 저장
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Value:", selectedValue); // 변경된 로그 메시지
  };

  const goToMain = () => {
    navigate("/main");
  };

  /* 여러 개 선택 가능 
    const handleOptionToggel = (option) => {
    if (selectedValues.includes(option)) {
      setSelectedValues(selectedValues.filter((value) => value !== option));
    } else {
      setSelectedValues([...selectedValues, option]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Values:", selectedValues);
  }; */

  return (
    <div>
      <header>활동 지역 선택</header>
      <hr />
      <br />

      <form onSubmit={handleSubmit}>
        {availableOptions.map((option) => (
          <label
            key={option}
            className={selectedValue === option ? "checked" : "checkbox"} // 변경된 클래스 이름
          >
            <input
              type="radio" // 라디오 버튼으로 변경
              name="region"
              value={option}
              checked={selectedValue === option}
              onChange={() => handleOptionSelect(option)}
              style={{ display: "none" }}
            />
            {option}
          </label>
        ))}
        {/*         여러 개 선택 가능
        <label
          key={option}
          className={selectedValues.includes(option) ? "checked" : "checkbox"}
        >
          <input
            type="checkbox"
            value={option}
            checked={selectedValues.includes(option)}
            onChange={() => handleOptionToggel(option)}
          />
          {option}
        </label>
        ))}  */}
        <br />
        <br />
        <button type="submit" className="apply" onClick={goToMain}>
          적용하기
        </button>
      </form>
    </div>
  );
};

export default SelectRegion;
