import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./static/EditCareer.css";

const EditCareer = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const [careerInputs, setCareerInputs] = useState([
    {
      volunteerExp: "",
      careerMonth: "under3",
      volunteerPlace: "",
    },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...careerInputs];
    newInputs[index][name] = value;
    setCareerInputs(newInputs);
  };

  const handleAddInput = () => {
    setCareerInputs([
      ...careerInputs,
      {
        volunteerExp: "",
        careerMonth: "under3",
        volunteerPlace: "",
      },
    ]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // input 영역의 값들 가져오기
    const volunteerExp = event.target.volunteerExp.value;
    const careerMonth = event.target.careerMonth.value;
    const volunteerPlace = event.target.volunteerPlace.value;

    // 서버에 전송할 데이터 객체 생성
    const data = {
      volunteerExp,
      careerMonth,
      volunteerPlace,
    };

    try {
      // axios를 사용하여 POST 요청 보내기
      const response = axios.post("/account/bestguide", data);

      // 서버 응답 처리
      console.log("서버 응답:", response.data);

      // 변경 완료 후 처리 (예: 페이지 이동)
      navigate("/success"); // 변경 완료 페이지로 이동하도록 수정
    } catch (error) {
      // 오류 처리
      console.error("오류 발생:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="select">
        <header>
          {" "}
          <img
            src="/images/back.png"
            className="GoBackButton"
            onClick={onBack}
            width="20"
            height="20"
          />
          봉사 경력 변경
        </header>
        <div className="career_box">
          {careerInputs.map((input, index) => (
            <div key={index}>
              <label>
                <br />
                <div className="career_title">봉사활동 경험</div>
                <br />
                <input
                  className="volunteer_exp"
                  type="date"
                  name="volunteerExp"
                  value={input.volunteerExp}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </label>
              <br />
              <label>
                <div className="career_title">활동 기간</div>
                <br />
                <select
                  className="volunteer_mon"
                  name="careerMonth"
                  value={input.careerMonth}
                  onChange={(event) => handleInputChange(index, event)}
                >
                  <option value="under3">3개월 미만</option>
                  <option value="under6">6개월 미만</option>
                  <option value="under12">1년 미만</option>
                  <option value="upper12">1년 이상</option>
                </select>
              </label>
              <br />
              <label>
                <div className="career_title">봉사 기관</div>
                <br />
                <input
                  className="volunteer_pla"
                  name="volunteerPlace"
                  type="text"
                  placeholder="봉사기관명을 입력해 주세요."
                  value={input.volunteerPlace}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </label>
              <br />
              {/*               <hr className="career_hr" /> */}
            </div>
          ))}
          <button type="button" className="career_add" onClick={handleAddInput}>
            추가
          </button>
          <br />
        </div>
        <div>
          <button type="submit" className="submit">
            변경 완료
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditCareer;
