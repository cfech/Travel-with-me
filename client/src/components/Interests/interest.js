import React from "react";

const Interest = ({ name, score, snippet, image }) => {
  return (
    <>
      <div>
        <p>name</p>
        <p>{score}</p>
        <p>{snippet}</p>
        <img src={image} alt={name} />
        <p>------</p>
      </div>
    </>
  );
};

export default Interest;
