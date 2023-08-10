import React from "react";

const IconWithText = ({ imageSrc, text }) => {
  return (
    <div>
      <img src={require(`../assets/${imageSrc}`).default} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default IconWithText;
