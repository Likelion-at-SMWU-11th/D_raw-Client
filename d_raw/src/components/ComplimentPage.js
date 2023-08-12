import React, { useState } from "react";
import styled from "styled-components";
const ComplimentContainer = styled.div`
  text-align: center;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 20px;
`;

const Heading = styled.h3`
  font-weight: bold;
`;

const CompImage = styled.img`
  width: 100px;
  height: 100px;
`;

const Textarea = styled.textarea`
  padding: 40px;
  width: 280px;
  height: 100px;
  white-space: 280px;
`;

const CharCount = styled.span`
  float: right;
`;

const PhotoButton = styled.button`
  padding: 10px 93px;
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
  padding: 10px 150px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  border: 3px solid orange;
  color: white;
  background: #ff971e;
  white-space: nowrap;
`;

const ComplimentPage = () => {
  const [reviewText, setReviewText] = useState("");

  const handleReviewChange = (event) => {
    const newText = event.target.value;
    setReviewText(newText);
  };

  return (
    <ComplimentContainer>
      <Heading>
        <button>뒤로</button>칭찬 도장
      </Heading>
      <hr />
      <br />
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
      <br />
      <h3 align="left">자세한 리뷰를 작성해주세요</h3>
      <p align="left">
        친절함/성실도/도움 여부 등에 대한 경험을 <br />
        적어주세요
      </p>
      <Textarea
        value={reviewText}
        onChange={handleReviewChange}
        maxLength="300"
        placeholder="디지털 약자분들이 더 나은 서비스를 받을 수 있도록 구체적으로 적어주세요"
      ></Textarea>
      <CharCount>({reviewText.length}/300)</CharCount>
      <br />
      <PhotoButton>📷 사진 첨부하기 (선택) </PhotoButton>
      <br />
      <p align="left">
        * 안내사 매칭 경험과 관련없거나 부적절한 리뷰는 삭제 조치되니
        유의해주세요.
      </p>
      <br />
      <br />
      <br />
      <StampButton>도장 지급</StampButton>
    </ComplimentContainer>
  );
};

export default ComplimentPage;
