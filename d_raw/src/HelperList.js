import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import "./static/Base.css";
import "./static/HelperList.css";

const HelperList = () => {
  const navigate = useNavigate();

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const goAfterSelect = () => {
    navigate("/match/check");

    if (isChecked1 || isChecked2) {
      // Prepare data for the POST request
      const selectedData = {
        isChecked1,
        isChecked2,
        // Add more selected values if needed
      };

      // Make the POST request using Axios
      axios
        .post("/match/profile", selectedData)
        .then((response) => {
          console.log("POST success:", response.data);
          // Handle success if needed
        })
        .catch((error) => {
          console.error("POST error:", error);
          // Handle error if needed
        });
    }
  };

  const goToHelperProfile = () => {
    navigate("/match/profile/<int:pk>");
  };

  const onBack = () => {
    navigate(-1);
  };

  const onCheck = (e) => {
    e.preventDefault();
  };

  const onCancel = (e) => {
    e.preventDefault();
    setIsChecked1(false);
    setIsChecked2(false);
  };

  const SelectedButton = styled.button`
    border-radius: 10px;
    display: block;
    background-color: #f9d1cf;
    color: #ff971e;
    border: 1px solid grey;
    width: 290px;
    height: 40px;
    float: center;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    margin-left: -10px;
  `;

  const UnselectedButton = styled.button`
    border-radius: 10px;
    display: block;
    background-color: white;
    border: 1px solid grey;
    width: 290px;
    height: 40px;
    float: center;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    margin-left: -10px;
  `;

  return (
    <div className="helperlist_div">
      <form action="post">
        <header>
          {" "}
          <img
            src="/images/back.png"
            className="GoBackButton"
            onClick={onBack}
            width="20"
            height="20"
          />
          안내사 목록
        </header>
        <hr />
        <div className="helper_notice">
          D:raw 안내사는 최대 3명까지 선택 가능합니다.{" "}
        </div>
        <div className="helperlist">
          <div className="helper">
            <br />
            <div className="helperlist_content_left">
              <span className="helperlist_name">김눈송</span>
              <br />
              <span className="helperlist_time">D:raw 활동 65시간</span> <br />
              <span className="helperlist_stamp">🎖 도장 &#40;78&#41;</span>
            </div>
            <div className="helperlist_content_right">
              <img
                className="helperlist_image"
                src="/images/default_profile.png"
              />
              <br />
              <span className="helperlist_image_detail">
                상세프로필 {/* &nbsp; */}
                <span
                  className="helperlist_image_detail"
                  onClick={goToHelperProfile}
                >
                  {" "}
                  &#62;
                </span>
              </span>
            </div>
            {isChecked1 ? (
              <SelectedButton>
                <label>
                  <input
                    type="radio"
                    name="apply"
                    className="matching_radio"
                    onClick={onCheck}
                    checked={isChecked1}
                    onChange={() => {
                      setIsChecked1(true);
                      setIsChecked2(false);
                    }}
                  />{" "}
                  선택됨
                </label>
              </SelectedButton>
            ) : (
              <UnselectedButton>
                <label>
                  <input
                    type="radio"
                    name="apply"
                    className="matching_radio"
                    checked={isChecked1}
                    onClick={onCheck}
                    onChange={() => {
                      setIsChecked1(true);
                      setIsChecked2(false);
                    }}
                  />
                  선택하기
                </label>
              </UnselectedButton>
            )}
          </div>
        </div>
        {/*       두번째 */}
        <div className="helperlist">
          <div className="helper">
            <br />
            <div className="helperlist_content_left">
              <span className="helperlist_name">김눈송</span>
              <br />
              <span className="helperlist_time">D:raw 활동 65시간</span> <br />
              <span className="helperlist_stamp">🎖 도장 &#40;78&#41;</span>
            </div>
            <div className="helperlist_content_right">
              <img
                className="helperlist_image"
                src="/images/default_profile.png"
              />
              <br />
              <span className="helperlist_image_detail">
                상세프로필 {/* &nbsp; */}
                <span
                  className="helperlist_image_detail"
                  onClick={goToHelperProfile}
                >
                  {" "}
                  &#62;
                </span>
              </span>
            </div>
            {isChecked2 ? (
              <SelectedButton>
                <label>
                  <input
                    type="radio"
                    name="apply"
                    className="matching_radio"
                    checked={isChecked2}
                    onClick={onCheck}
                    onChange={() => {
                      setIsChecked1(false);
                      setIsChecked2(true);
                    }}
                  />{" "}
                  선택됨
                </label>
              </SelectedButton>
            ) : (
              <UnselectedButton>
                <label>
                  <input
                    type="radio"
                    name="apply"
                    className="matching_radio"
                    checked={isChecked2}
                    onClick={onCheck}
                    onChange={() => {
                      setIsChecked1(false);
                      setIsChecked2(true);
                    }}
                  />
                  선택하기
                </label>
              </UnselectedButton>
            )}
          </div>
        </div>
        {/*       <div className="helperlist">
        <div className="helper">
          <br />
          <div className="helperlist_content_left">
            <span className="helperlist_name">김눈송</span>
            <br />
            <span className="helperlist_time">D:raw 활동 65시간</span> <br />
            <span className="helperlist_stamp">🎖 도장 &#40;78&#41;</span>
          </div>
          <div className="helperlist_content_right">
            <img
              className="helperlist_image"
              src="/images/default_profile.png"
            />
            <br />
            <span className="helperlist_image_detail">
              상세프로필
              <span
                className="helperlist_image_detail"
                onClick={goToHelperProfile}
              >
                {" "}
                &#62;
              </span>
            </span>
          </div>
        </div>
        <button type="submit" className="add_profile">
          신청 완료
        </button>
      </div> */}
        <div className="helperlist_button_tie">
          <button className="helperlist_button" onClick={onCancel}>
            취소
          </button>
          <button
            type="submit"
            onClick={goAfterSelect}
            /* {isChecked1 || isChecked2 ? "submit" : "none-apply"}
             */
            className={
              isChecked1 || isChecked2
                ? "helperlist_button_select"
                : "helperlist_button"
            }
          >
            선택완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default HelperList;
