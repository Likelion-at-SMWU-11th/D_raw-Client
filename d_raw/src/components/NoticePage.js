import React from "react";
import styled from "styled-components";

const NoticeContainer = styled.div`
  text-align: center;
  width: 362px;
  height: 800px;
  background-color: white;
  padding: 20px;
  position: relative;
`;

const Heading = styled.h3`
  font-weight: bold;
`;

const NoticePage = () => {
  return (
    <NoticeContainer>
      <Heading>공지사항</Heading>
      <hr />
    </NoticeContainer>
  );
};

export default NoticePage;
