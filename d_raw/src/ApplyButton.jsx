import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
    margin-left:-17px;
    margin-bottom: 10px;
    width: 100%;
    padding: 10px 100px;
    border-radius: 8px;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    border: 3px solid orange;
    color: white;
    background: #FF971E;
    white-space: nowrap;
`;

const ApplyButton = () => {
    return (
        <div>
            <Link to="/match/1">
            <StyledButton>바로 신청하기 ▶</StyledButton></Link>
            <br /> 
            <Link to="/match/search">
            <StyledButton>매칭 찾아보기 ▶</StyledButton></Link>
            <hr />
        </div>
    );
};

export default ApplyButton;