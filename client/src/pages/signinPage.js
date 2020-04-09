import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../components/API";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  links: {
    color: "black",
    textDecoration: "none",
    fontSize: 17,
    "&:hover": {
      color: "red",
    },
  },
}));

function singIn() {
  // Setting our component's initial state
  const classes = useStyles();

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
      singIn
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
      <Link className={classes.links} to="/signUp">
        Sign Up?
      </Link>
    </div>
  );
}

export default singIn;
