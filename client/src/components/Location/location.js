import React from "react";

const Location = ({ name, snippet, image }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{snippet}</p>
      <img src={image} alt={name} />
    </>
  );
};
export default Location;
