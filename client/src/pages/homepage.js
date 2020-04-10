import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../components/API";
import Poi from "../components/POI"
import { makeStyles } from "@material-ui/styles";
import Nav from "../components/Nav"

function Home() {
  // Setting our component's initial state
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [pointsOfInterest, setPointsOfInterest] = useState([])

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


  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    ApiSearch()
    console.log("clicked");
  };





  const ApiSearch = () => {
    API.ApiSearch(searchTerm)
      .then(res => {
        console.log(res.data.results[0])
        setLat(res.data.results[0].coordinates.latitude)
        setLong(res.data.results[0].coordinates.longitude)
        PoiSearch()
      })
      .catch(err => console.log(err))
  }

  const PoiSearch = () => {
    Poi.ApiSearch(lat, long)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  return (

    <div>
      <Nav />
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
