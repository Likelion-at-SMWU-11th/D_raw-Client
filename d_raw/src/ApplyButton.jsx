import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 10px 100px;
    border-radius: 8px;
    text-align: left;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    border: 3px solid orange;
    margin: 8px;
    color: white;
    background: #FF971E;
`;

const ApplyButton = () => {
    return (
        <div>
            <StyledButton>바로 신청하기 ▶</StyledButton> 
            <br /> 
            <StyledButton>매칭 찾아보기 ▶</StyledButton>
            <hr />
        </div>
    );
};

export default ApplyButton;