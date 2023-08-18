import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HelperFastMatching from "./HelperFastMatching";
import HelperSuggestMatching from "./HelperSuggestMatching";
import HelperSuggestMatching_content from "./HelperSuggestMatching_content";
import "./static/Base.css";
import "./static/HelperMatching.css";

const HelperMatching = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };

  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <header>
        <img
          src="/images/back.png"
          className="GoBackButton"
          onClick={onBack}
          width="20"
          height="20"
        />
        매칭 찾기
      </header>
      <hr />
      <div className="helper_findingMatching">
        <div className="helper_matching">
          <button
            className={`helper_matching_button ${
              activeComponent === "A" ? "active" : ""
            }`}
            onClick={() => handleComponentClick("A")}
            disabled={activeComponent === "A"} // A가 활성화되었을 때만 버튼 비활성화
          >
            빠른 매칭
          </button>
          <br />
          <hr
            className={`helper_matching_hr ${
              activeComponent === "A" ? "active_hr" : ""
            }`}
          />
        </div>
        <div className="helper_matching">
          <button
            className={`helper_matching_button ${
              activeComponent === "B" ? "active" : ""
            }`}
            onClick={() => handleComponentClick("B")}
            disabled={activeComponent === "B"} // A가 활성화되었을 때만 버튼 비활성화
          >
            제안 받은 매칭
          </button>
          <br />
          <hr
            className={`helper_matching_hr ${
              activeComponent === "B" ? "active_hr" : ""
            }`}
          />
        </div>
        {/*         <div className="helper_matching">
          <button
            className={`helper_matching_button ${
              activeComponent === "B" ? "active" : ""
            }`}
            onClick={() => handleComponentClick("B")}
            disabled={activeComponent === "B"} // B가 활성화되었을 때만 버튼 비활성화
          >
            제안 받은 매칭
          </button>
          <br />
          <hr
            className={`helper_matching_hr ${
              activeComponent === "B" ? "active_hr" : ""
            }`}
          />
        </div> */}
      </div>
      <div className="activeComponent">
        {activeComponent === "A" && <HelperFastMatching />}
        {/*         {activeComponent === "B" && <HelperSuggestMatching_content />} */}
        {activeComponent === "B" && <HelperSuggestMatching />}
      </div>
    </div>
  );
};

export default HelperMatching;
