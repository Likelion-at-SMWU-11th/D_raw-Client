import React, { useState } from "react";
import styled from "styled-components";

const VolunteerlogContainer = styled.div`
  text-align: center;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 20px;
`;

const Heading = styled.h3`
  margin-top: 5px;
  margin-left: -15px;
  font-weight: bold;
`;

const Describe = styled.div`
  margin-left: -10px;
  margin-top: -25px;
  margin-bottom: -20px;
  white-space: nowrap;
`;

const CompImage = styled.img`
  margin-left: -10px;
  margin-top: 5px;
  width: 120px;
  height: 120px;
`;

const Textarea = styled.textarea`
  margin-left: -20px;
  padding: 40px;
  width: 250px;
  height: 100px;
  white-space: 280px;
`;

const CharCount = styled.span`
  float: right;
`;

const PhotoButton = styled.button`
  padding: 10px 65px;
  margin-left: -20px;
  border-radius: 6px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  border: 3px solid orange;
  color: solid gray;
  background: white;
  white-space: nowrap;
`;

const StampButton = styled.button`
  padding: 10px 120px;
  margin-left: -20px;
  margin-top: -7px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  border: 3px solid orange;
  color: white;
  background: #ff971e;
  white-space: nowrap;
`;

const Volunteerlog = () => {
  const [reviewText, setReviewText] = useState("");

  const handleReviewChange = (event) => {
    const newText = event.target.value;
    setReviewText(newText);
  };

  return (
    <VolunteerlogContainer>
      <Heading>
        봉사 일지
        <hr />
      </Heading>
      <br />
      <Describe>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <CompImage src="song.png" alt="song" />
          <div style={{ marginLeft: "10px", textAlign: "left" }}>
            <h3>
              <strong>김눈* 안내사</strong>
            </h3>
            <p>봉사 일시: 23. 08. 18(금)</p>
            <p>오후 1시~3시</p>
          </div>
        </div>
      </Describe>
      <br />
      <hr />
      <h3 align="left">정확한 봉사 내용을 입력해주세요</h3>
      <p align="left">
        안내한 서비스 종류 / 안내 내용 등을
        <br />
        적어주세요
      </p>
      <Textarea
        value={reviewText}
        onChange={handleReviewChange}
        maxLength="300"
        placeholder="봉사 시간을 받기 위해서는 보다 구체적인 내용이
        필요합니다. 활동 내용을 정확하게 적어주세요."
      ></Textarea>
      <CharCount>({reviewText.length}/300)</CharCount>
      <br />
      <PhotoButton>📷 사진 첨부하기 (선택) </PhotoButton>
      <br />
      <p align="left">
        * 봉사 일지 작성 조건을 충족하지 못 할 경우(안내한 서비 스 종류/안내
        내용 미포함), 봉사 시간 입력이 보류됨을 유의해주세요
      </p>
      <br />
      <br />
      <StampButton>제출하기</StampButton>
    </VolunteerlogContainer>
  );
};

export default Volunteerlog;
