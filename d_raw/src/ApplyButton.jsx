import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
    width: 100%;
    padding: 10px 100px;
    border-radius: 8px;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    border: 3px solid orange;
    margin: 8px;
    color: white;
    background: #FF971E;
    white-space: nowrap;
`;

const ApplyButton = () => {
    return (
        <div>
            <Link to="/service">
            <StyledButton>바로 신청하기 ▶</StyledButton></Link>
            <br /> 
            <StyledButton>매칭 찾아보기 ▶</StyledButton>
            <hr />
        </div>
    );
};

export default ApplyButton;