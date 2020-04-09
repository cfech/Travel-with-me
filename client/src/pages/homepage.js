import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../components/API";
import { makeStyles } from "@material-ui/styles";
import Nav from "../components/Nav"

function Home() {
  // Setting our component's initial state


  const useStyles = makeStyles(() => ({
    links: {
      color: "black",
      textDecoration: "none",
      fontSize: 17,
      "&:hover": {
        color: "red",
      },
    },
  }))

const classes = useStyles();
 
const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked");
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  return (
   
    <div>
       <Nav/>
      hello
      <div>
        <p>Search</p>
      </div>
      <form>
        <input
          placeholder="location search"
          onChange={handleInputChange}
        ></input>
        <button className="searchBtn" type="submit" onClick={handleSubmit}>
          search
        </button>
      </form>

      <Link className={classes.links} to="/item">
        item page
      </Link>

    </div>
  );
}

export default Home;
