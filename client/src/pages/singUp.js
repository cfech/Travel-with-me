import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../components/API";
import { makeStyles } from "@material-ui/styles";

function singUp() {
  // Setting our component's initial state

  const handleSubmit = (event) => {
    console.log("clicked");
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChangeU = (event) => {
    setUserName(event.target.value);
    console.log(userName);
  };

  const handleInputChangeP = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  return (
    <div>
      singUp
      <form>
        <input
          name=" email"
          placeholder="email"
          onChange={handleInputChangeU}
        ></input>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleInputChangeP}
        ></input>
        <button type="submit" onChange={handleSubmit}>
          Click me
        </button>
      </form>
    </div>
  );
}

export default singUp;
