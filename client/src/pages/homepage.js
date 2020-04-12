import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../components/API";
import Poi from "../components/POI";
import { makeStyles } from "@material-ui/styles";
import Nav from "../components/Nav";
import Interest from "../components/Interests/interest";
import Location from "../components/Location/location";
import { Grid } from "@material-ui/core";



function Home() {
  // Setting our component's initial state
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [place, setPlace] = useState({});
  const [interest, setInterest] = useState([]);

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

  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ApiSearch();
    console.log("clicked");
  };
  const handleInterest = (event) => {
    event.preventDefault();
    PoiSearch();
    console.log("poisearch");
  };

  const ApiSearch = () => {
    let newTerm = searchTerm
      .split(" ")
      .map((val) => val[0].toUpperCase() + val.slice(1))
      .join("_");
    API.ApiSearch(newTerm)
      .then((res) => {
        console.log(res.data.results[0]);
        setLat(res.data.results[0].coordinates.latitude);
        setLong(res.data.results[0].coordinates.longitude);
        setPlace(res.data.results[0]);
        setIsLoaded(true);

        console.log(isLoaded);
      })
      .catch((err) => console.log(err));
  };

  const PoiSearch = () => {
    Poi.ApiSearch(lat, long)
      .then((res) => {
        console.log(res.data.results[0].pois);
        console.log(res.data.results[0].pois[1].images.sizes);
        setInterest(res.data.results[0].pois);
      })
      .catch((err) => console.log(err));
  };

  if (error) {
    return (
      <>
        <Nav />
        <form>
          <input
            placeholder="location search"
            onChange={handleInputChange}
          ></input>
          <button className="searchBtn" type="submit" onClick={handleSubmit}>
            search
        </button>
        </form>
      </>
    );
  } else if (!isLoaded) {
    // this is the default return of the component
    return (
      <div>
        <Nav />
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
        <button onClick={handleInterest}>show interests</button>
        <Link className={classes.links} to="/item">
          item page
        </Link>
      </div>
    );
  } else {
    return (
      // loads when state is set to true during api call
      <>

        <Nav />
        <form>
          <input
            placeholder="location search"
            onChange={handleInputChange}
          ></input>
          <button className="searchBtn" type="submit" onClick={handleSubmit}>
            search
          </button>
        </form>
        <form>
          <button onClick={handleInterest}>show interests</button>
        </form>

        <Location
          name={place.name}
          snippet={place.snippet}
          image={place.images[0].sizes.medium.url}
        />
        <Grid item container>
          {interest.map((item) => (
            <Grid key={item.id} item xs={6} sm={4} md={3}>
              <Interest
                key={item.id}
                name={item.name}
                score={Math.round(item.score)}
                snippet={item.snippet}
                image={
                  item.images.sizes === undefined
                    ? "https://via.placeholder.com/150"
                    : item.images[0].sizes.medium.url
                }
                attribution={item.attribution}
              />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default Home;
