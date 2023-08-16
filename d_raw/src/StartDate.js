import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./static/EditCareer.css";

const EditCareer = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
          D:raw 안내사 시작일
        </header>
        <br />
        <br />
        <div className="career_box">
          <div>
            <span className="career_title">D:raw 안내사 첫 활동일</span>
            <br />
            <div className="startdate">2023년 2월 14일</div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </form>
  );
};

export default EditCareer;
