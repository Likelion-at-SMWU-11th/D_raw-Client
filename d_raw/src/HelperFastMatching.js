import React, { useState } from "react";
import "./static/Base.css";
import "./static/HelperFastMatching.css";

const HelperFastMatching = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <div>
      <div className={`fastmatching ${isChecked1 ? "checkbox-selected" : ""}`}>
        <div className="fastmatching_tie">
          <div className="fastmatching_title">
            &nbsp;&nbsp;&nbsp;봉사시작 &nbsp; &#124;
          </div>
          <div className="fastmatching_content">08.18 오후 1시</div>
        </div>
        <div className="fastmatching_tie">
          <div className="fastmatching_title">
            &nbsp; &nbsp;봉사장소 &nbsp; &#124;
          </div>
          <div className="fastmatching_content">숙명여자대학교</div>
        </div>
        <div className="fastmatching_content_specific">
          <div className="fastmatching_tie">
            <div className="fastmatching_box_title">선호 안내사</div>
            <div className="fastmatching_box_title">희망 서비스</div>
            <div className="fastmatching_box_title">시간</div>
          </div>
          <div className="fastmatching_tie">
            <div className="fastmatching_box_content">여성, 성인</div>
            <div className="fastmatching_box_content">인터넷 뱅킹 외</div>
            <div className="fastmatching_box_content">2</div>
          </div>
        </div>
        <hr />
        <div className="fastmatching_tie">
          <div className="fastmatching_title">마감까지 6일 남음</div>
          <label>
            <input
              type="radio"
              name="apply"
              checked={isChecked1}
              onChange={() => {
                setIsChecked1(true);
                setIsChecked2(false);
              }}
            />
            선택
          </label>
        </div>
      </div>
      <div className={`fastmatching ${isChecked2 ? "checkbox-selected" : ""}`}>
        <div className="fastmatching_tie">
          <div className="fastmatching_title">
            &nbsp;&nbsp;&nbsp;봉사시작 &nbsp; &#124;
          </div>
          <div className="fastmatching_content">08.18 오후 1시</div>
        </div>
        <div className="fastmatching_tie">
          <div className="fastmatching_title">
            &nbsp; &nbsp;봉사장소 &nbsp; &#124;
          </div>
          <div className="fastmatching_content">숙명여자대학교</div>
        </div>
        <div className="fastmatching_content_specific">
          <div className="fastmatching_tie">
            <div className="fastmatching_box_title">선호 안내사</div>
            <div className="fastmatching_box_title">희망 서비스</div>
            <div className="fastmatching_box_title">시간</div>
          </div>
          <div className="fastmatching_tie">
            <div className="fastmatching_box_content">여성, 성인</div>
            <div className="fastmatching_box_content">인터넷 뱅킹 외</div>
            <div className="fastmatching_box_content">2</div>
          </div>
        </div>
        <hr />
        <div className="fastmatching_tie">
          <div className="fastmatching_title">마감까지 6일 남음</div>
          <label>
            <input
              type="radio"
              name="apply"
              checked={isChecked2}
              onChange={() => {
                setIsChecked1(false);
                setIsChecked2(true);
              }}
            />
            선택
          </label>
        </div>
      </div>

      <br />
      <label>
        <button
          type="submit"
          className={isChecked1 || isChecked2 ? "apply" : "none-apply"}
        >
          지원하기
        </button>
      </label>
    </div>
  );
};

export default HelperFastMatching;
