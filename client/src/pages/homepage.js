import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../components/API";
import Poi from "../components/POI";
import Day from "../components/DAY"
import { makeStyles } from "@material-ui/styles";
import Nav from "../components/Nav";
import Interest from "../components/Interests/interest";
import Location from "../components/Location/location";
import DayTrip from "../components/Day/dayTrip"
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';




function Home() {
  // Setting our component's initial state
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [place, setPlace] = useState({});
  const [interest, setInterest] = useState([]);
  const [daySearch, setDaySearch] = useState("");
  const [dayTrip, setDayTrip] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const useStyles = makeStyles(() => ({
    links: {
      color: "black",
      textDecoration: "none",
      fontSize: 17,
      "&:hover": {
        color: "red",
      },
    },
    cityRow: {
      background: "rgb(163, 187, 230)",
      margin: 0,
      justifyContent: "space-around"

    },
    media: {
      height: 300,
      margin: 0,
      width: "100%"
    },

  }));

  const classes = useStyles();



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

  const handleDay = (event) => {
    event.preventDefault();
    DaySearch();
    console.log("day search")
  }
  // need error validation for blank search term
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
        setDaySearch(res.data.results[0].id)
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

  const DaySearch = () => {
    Day.ApiSearch(daySearch)
      .then((res) => {
        console.log("working");
        console.log(res.data.results)
        console.log(res.data.results[0].days[0].itinerary_items)
        setDayTrip(res.data.results[0].days[0].itinerary_items)
      })
      .catch((err) => console.log(err))
  }
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
          </button>
        </form>
      </>
    );
  } else if (!isLoaded) {
    // this is the default return of the component
    return (
      <div>
        <Nav />
        <Grid item container>
          <Grid item xs={false} s={3} />
          <Grid item xs={12} s={6}>
            <img className={classes.media} src="https://cdn2.slidemodel.com/wp-content/uploads/2074-01-worldmap-connections-16x9-2.jpg" />
          </Grid>
        </Grid>
        <div>
        </div>
        {/* buttons container */}
        <Grid item container>
          <Grid item xs={12} className={classes.cityRow}>
            <form>
              <input
                placeholder="location search"
                onChange={handleInputChange}
              ></input>

              <Button variant="contained" color="primary" disableElevation type="submit" onClick={handleSubmit}>
                Search
              </Button>
            </form>
            <Button variant="contained" color="primary" disableElevation onClick={handleInterest}>show interests</Button>
            <Button variant="contained" color="primary" disableElevation onClick={handleDay}>Day Trip</Button>

          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      // loads when state is set to true during api call
      <>

        <Nav />

        <Location
          name={place.name}
          snippet={place.snippet}
          image={place.images[0].source_url}
        />
        {/* Buttons container */}
        <Grid item container>
          <Grid item xs={12} className={classes.cityRow}>
            <form>
              <input
                placeholder="location search"
                onChange={handleInputChange}
              ></input>
              <Button variant="contained" color="primary" disableElevation type="submit" onClick={handleSubmit}>
                Search
              </Button>
            </form>
            <Button variant="contained" color="primary" disableElevation onClick={handleInterest}>show interests</Button>
            <Button variant="contained" color="primary" disableElevation onClick={handleDay}>Day Trip</Button>
          </Grid>
          <Grid item xs={12} className={classes.empty}>

          </Grid>
        </Grid>
        <div>
          {/* map through daytrip items */}
          {dayTrip.map((item) => (
            <Grid key={item.description} item xs={12}>
              <DayTrip
                title={item.title}
                description={item.description}
                snippet={item.snippet}
                name={item.poi.name}
                score={Math.round(item.poi.score)}
              />
            </Grid>
          ))}
        </div>


        <Grid item container>
          {/* map through places of interest */}
          {interest.map((item) => (
            <Grid key={item.id} item xs={6} sm={4} md={3}>
              <Interest
                key={item.id}
                name={item.name}
                score={Math.round(item.score)}
                snippet={item.snippet}
                image={
                  item.images[0]
                    ? item.images[0].sizes.medium.url
                    : "https://via.placeholder.com/150"
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


