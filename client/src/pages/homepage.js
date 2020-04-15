//Imports
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
import City from "../components/City/city";
import CityApi from "../components/CITY";
import tripApi from "../utils/tripApi"



function Home(props) {
  // Setting our component's initial state
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [error, setError] = useState(null);
  const [place, setPlace] = useState({});
  const [interest, setInterest] = useState([]);
  const [daySearch, setDaySearch] = useState("");
  const [dayTrip, setDayTrip] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState([]);
  const [stateOne, setStateOne] = useState(true)
  const [stateTwo, setStateTwo] = useState(false)
  const [stateThree, setStateThree] = useState(false)
  const [stateFour, setStateFour] = useState(false)
  const [stateFive, setStateFive] = useState(false)
  const [userId, setUserId] = useState("")

  //setting the user id on load
  useEffect(() => {
    setUserId(props.userId)

  });

  //styling 
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
    image: {
      width: "100%",
    }

  }));

  //using styles 
  const classes = useStyles();
  // need error validation for blank search term

  //search to set the city using return from city search

  //Function to perform the api search for location with correct id
  const ApiSearch = (id) => {
    API.ApiSearch(id)
      .then((res) => {
        console.log(res.data.results[0]);
        setLat(res.data.results[0].coordinates.latitude);
        setLong(res.data.results[0].coordinates.longitude);
        setPlace(res.data.results[0]);
        setDaySearch(res.data.results[0].id)
      })
      .catch((err) => console.log(err));
  };

  // point of interest api search
  const PoiSearch = () => {
    Poi.ApiSearch(lat, long)
      .then((res) => {
        console.log(res.data.results[0].pois);
        console.log(res.data.results[0].pois[1].images.sizes);
        setInterest(res.data.results[0].pois);
      })
      .catch((err) => console.log(err));
  };

  // day trip api search
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

  //city api search
  const CitySearch = () => {
    CityApi.ApiSearch(searchTerm)
      .then((res) => {
        console.log("city search");
        console.log(res.data.results)
        setCity(res.data.results)
      })
  }

  // input change for search tearm
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  //function to ste the 2nd state to true nad call the city search api call
  const handleSubmit = (event) => {
    event.preventDefault();
    setStateTwo(true)
    console.log("clicked");
    console.log(stateTwo)
    CitySearch();
  };


  //User Name and Id console.log
  console.log(props.loggedIn)
  console.log(userId)


  //Function to set the third state to true and call the place api search with the location id
  const handleThree = (event, id) => {
    event.preventDefault();
    console.log("three!!")
    setStateThree(true)
    console.log(id)
    ApiSearch(id)

  }

  // Set the state of four to true and call point of interest api search for the selected location
  const handleInterest = (event) => {
    event.preventDefault();
    PoiSearch();
    setStateFour(true)
    console.log("poisearch");
  };

  // Set the state of five to true and execute the daily plan search for the selected location
  const handleDay = (event) => {
    event.preventDefault();
    DaySearch();
    setStateFive(true)
    console.log("day search")
  }

  //If error return error page 
  if (error) {
    return (
      <>
        <Nav />
        <form>
          <input
            style={{ width: '800px' }}
            placeholder="location search4"
            onChange={handleInputChange}
          ></input>
          <button className="searchBtn" type="submit" onClick={handleSubmit}>
          </button>
        </form>
      </>
    );

    // STATE FIVE!!  STATE FIVE!!STATE FIVE!!STATE FIVE!!STATE FIVE!!STATE FIVE!!STATE FIVE!!STATE FIVE!!STATE FIVE!!STATE FIVE!!
  }
  else if (stateOne && stateTwo && stateThree && !stateFour && stateFive) {

    return (
      <div>
        <h1>five</h1>
        <Nav />
        <Location
          name={place.name} np
          snippet={place.snippet}
        // image={place.images[0].source_url}

        />
        <Grid item container>
          <Grid item xs={12} className={classes.cityRow}>
            <form>
              <Button variant="contained" color="primary" style={{ width: "200px", marginLeft: '10px', marginTop: '10px' }} disableElevation type="submit">Reset</Button>
            </form>
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
      </div>
    )

    // STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!
  } else if (stateOne && stateTwo && stateThree && stateFour) {

    return (
      <div>
        <h1>four</h1>
        <Nav />
        <Location
          name={place.name}
          snippet={place.snippet}
        // image={place.images[0].source_url}
        />
        <Grid item container>
          <Grid item xs={12} className={classes.cityRow}>
            <form>
              <Button variant="contained" color="primary" style={{ width: "200px", marginLeft: '10px', marginTop: '10px' }} disableElevation type="submit">Reset</Button>
            </form>
          </Grid>
        </Grid>

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
                userId = {userId}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }

  // STATE THREE!! STATE THREE!! STATE THREE!! STATE THREE!! STATE THREE!! STATE THREE!! STATE THREE!! STATE THREE!! STATE THREE!!
  else if (stateOne && stateTwo && stateThree && !stateFour) {
    return (
      <div>
        <h1>three</h1>
        <Nav />
        <Location
          name={place.name}
          snippet={place.snippet}
        // image={place.images[0].source_url}

        />
        <Grid item container>
          <Grid item xs={12} className={classes.cityRow}>



            <form style={{ postion: 'center' }}>
              <input
                style={{ width: '70%', height: '50px', marginLeft: '240px', marginTop: '40px', fontFamily: 'serif', fontSize: '20px' }}
                placeholder="Change your mind? Choose Another Destination..."
                onChange={handleInputChange}
              ></input>
            </form>

            <form>
          
              <Button variant="contained" color="primary" style={{ width: "200px", marginLeft: '35px', marginTop: '10px' }} disableElevation type="submit" onClick={handleInterest}>
                Show Interest
              </Button>
              <Button variant="contained" color="primary" style={{ width: "200px", marginLeft: '10px', marginTop: '10px' }} onClick={handleDay} disableElevation >Day Trip</Button>


              <Button variant="contained" color="primary" style={{ width: "200px", marginLeft: '10px', marginTop: '10px' }} disableElevation type="submit" >Reset</Button>
            </form>
          </Grid>
        </Grid>

      </div>
    )
  }
  // STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!!
  else if (stateOne && stateTwo && !stateThree && !stateFour) {

    return (
      <div>
        <h1>two</h1>
        <Nav />
        <Grid item container>
          <img src={require("../img/map-1.png")} className={classes.image} ></img>
        </Grid>


        <Grid item container>
          <Grid item xs={12} className={classes.cityRow}>
            <form style={{ postion: 'center' }}>
              <input
                style={{ width: '70%', height: '50px', marginLeft: '240px', marginTop: '40px', fontFamily: 'serif', fontSize: '20px' }}
                placeholder="Change your mind? Choose Another Destination..."
                onChange={handleInputChange}
              ></input>
            </form>
            <form>
              <Button variant="contained" style={{ width: "200px", position: 'center', marginLeft: '20px', marginTop: '10px', marginBottom: '20px', background: '#ff9800', fontFamily: 'serif' }} disableElevation type="submit" onClick={handleSubmit}>
                Search
              </Button>
              <Button variant="contained" style={{ width: "200px", position: 'center', marginLeft: '20px', marginTop: '10px', marginBottom: '20px', background: '#388e3c', fontFamily: 'serif' }} disableElevation type="submit">Reset</Button>
            </form>
          </Grid>
        </Grid>

        <h2>Choose which {searchTerm} you would like to go to, or search for new destination!</h2>



        <Grid item container>
          {city.map((item) => (
            <City key={item.score}
              name={item.name}
              state={item.parent_id}
              country={item.country_id}
              id={item.id}
              handleThree={handleThree}
              snippet={item.snippet}
              image={item.images[0].sizes.medium.url}
              userId={userId}
            />
          ))}
        </Grid>
      </div>
    )
  }
  // STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!!
  else if (stateOne && !stateTwo && !stateThree && !stateFour) {
    // this is the default return of the component
    return (
      <div style={{ backgroundColor: 'blue' }}>
        <Nav />
        <Grid item container>
          <img src={require("../img/map-1.png")} className={classes.image} ></img>
        </Grid>
        {/* buttons container */}
        <Grid item container>

          <Grid item xs={12} className={classes.cityRow}>
            <form style={{ postion: 'center' }}>
              <input

                style={{ width: '70%', height: '50px', marginLeft: '240px', marginTop: '40px', fontFamily: 'serif', fontSize: '20px' }}
                placeholder="Please Choose a Destination..."

                onChange={handleInputChange}
              ></input>

              <Button variant="contained" style={{ width: "300px", position: 'center', marginTop: '10px', marginBottom: '20px', background: '#ff9800', fontFamily: 'serif' }} disableElevation type="submit" onClick={handleSubmit}>
                Search
              </Button>
            </form>

          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;


