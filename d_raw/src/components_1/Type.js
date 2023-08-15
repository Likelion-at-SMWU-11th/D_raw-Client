import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./static/Base.css";
import "./static/type.css";

const Type = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const navigate = useNavigate();

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const goToNextpage = () => {
    navigate("/type/info");
  };

  return (
    <div>
      <header></header>
      <br />
      <div className="type">
        가입을 진심으로
        <br />
        환영합니다 :&#41;{" "}
      </div>

      <br />
      <div className="user_type">
        <span className="user_type_background">어떤 분이신가요?</span>
      </div>
      <br />
      <div>
        <label>
          <button
            className="select_type"
            value="helper"
            checked={selectedValue === "helper"}
            onChange={handleRadioChange}
            /* onClick={goToNextpage} */
          >
            👤<label className="textorange">서비스 이용자</label> 입니다.{" "}
          </button>
        </label>
      </div>
      <div>
        <label>
          <button
            className="select_type"
            value="helper"
            checked={selectedValue === "helper"}
            onChange={handleRadioChange}
            onClick={goToNextpage}
          >
            👩🏻‍💼<label className="textorange">안내사</label> 입니다.{" "}
          </button>
        </label>
      </div>
      <br />
    </div>
  );
};

export default Type;
