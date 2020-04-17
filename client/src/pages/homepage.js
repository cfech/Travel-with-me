//Imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../components/API";
import Poi from "../components/POI";
import Day from "../components/DAY";
import { makeStyles } from "@material-ui/styles";
import Nav from "../components/Nav/index";
import Interest from "../components/Interests/interest";
import Location from "../components/Location/location";
import DayTrip from "../components/Day/dayTrip";
import Options from "../components/Options/options";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import City from "../components/City/city";
import Credits from "../components/Credits/credits"
import CityApi from "../components/CITY";
import BING from "../components/BING";
//  import Footer from "../components/footer"
import Typography from "@material-ui/core/Typography";


function Home(props) {
  // Setting our component's initial state
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [error, setError] = useState(null);
  const [place, setPlace] = useState({});
  const [interest, setInterest] = useState([]);
  const [daySearch, setDaySearch] = useState("");
  const [dayTrip, setDayTrip] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState([]);
  const [stateOne, setStateOne] = useState(true)
  const [stateTwo, setStateTwo] = useState(false)
  const [stateThree, setStateThree] = useState(false)
  const [stateFour, setStateFour] = useState(false)
  const [stateFive, setStateFive] = useState(false)
  const [userId, setUserId] = useState("")
  const [mapImage, setMapImage] = useState("")


// Bing API Function
const bingFunction = () => {
  BING.ApiSearch(searchTerm)
  .then(res => {
    console.log("==== BING ====")
    console.log(res)
    setMapImage(res.value[0].contentUrl)
  })
  .catch(err => {
    console.log(err)
  })
}

  //setting the user id on load
  useEffect(() => {
    props.getUser();
  }, []);

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
      background: "#EEC218",
      margin: 0,
      justifyContent: "space-around",
    },
    media: {
      height: 300,
      margin: 0,
      width: "100%",
    },
    image: {
      width: "100%",
    },
    options: {
      marginBottom: 50,
    },
    int: {
      justifyContent: "center",
    },
  }));

  //using styles
  const classes = useStyles();

  //Function to perform the api search for location with correct id
  const ApiSearch = (id) => {
    API.ApiSearch(id)
      .then((res) => {
        console.log(res.data.results[0]);
        setLat(res.data.results[0].coordinates.latitude);
        setLong(res.data.results[0].coordinates.longitude);
        setPlace(res.data.results[0]);
        setDaySearch(res.data.results[0].id);
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
        console.log(res.data.results);
        console.log(res.data.results[0].days[0].itinerary_items);
        setDayTrip(res.data.results[0].days[0].itinerary_items);
      })
      .catch((err) => console.log(err));
  };

  //city api search
  const CitySearch = () => {
    CityApi.ApiSearch(searchTerm).then((res) => {
      console.log("city search");
      console.log(res.data.results);
      setCity(res.data.results);
    });
  };

  // input change for search tearm
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  //function to ste the 2nd state to true nad call the city search api call
  const handleSubmit = (event) => {
    event.preventDefault();
    bingFunction()
    setStateTwo(true)
    console.log("clicked");
    console.log(stateTwo);
    CitySearch();
  };

  //User Name and Id console.log
  console.log(props.loggedIn);
  console.log(props.userId);

  //Function to set the third state to true and call the place api search with the location id
  const handleThree = (event, id) => {
    event.preventDefault();
    console.log("three!!");
    setStateThree(true);
    console.log(id);
    ApiSearch(id);
  };

  // Set the state of four to true and call point of interest api search for the selected location
  const handleInterest = (event) => {
    event.preventDefault();
    PoiSearch();
    setStateFour(true);
    console.log("poisearch");
  };

  // Set the state of five to true and execute the daily plan search for the selected location
  const handleDay = (event) => {
    event.preventDefault();
    DaySearch();
    setStateFive(true);
    console.log("day search");
  };

  //If error return error page
  if (error) {
    return (
      <>
        <Nav updateUser={props.updateUser} />
        <form>
          <input
            style={{ width: "800px" }}
            placeholder="location search4"
            onChange={handleInputChange}
          ></input>
          <button
            className="searchBtn"
            type="submit"
            onClick={handleSubmit}
          ></button>
        </form>
      </>
    );

    // STATE FIVE!!  STATE FIVE!!STATE FIVE!!STATE FIVE!!STATE FIVE!!STATE FIVE!!STATE FIVE!!STATE FIVE!!STATE FIVE!!STATE FIVE!!
  } else if (stateOne && stateTwo && stateThree && !stateFour && stateFive) {
    return (
      <div>
        <Nav updateUser={props.updateUser} />
        <img src = {require("../img/state-5.png")} className={classes.image} ></img>
        <Location
          name={place.name}
          np
          snippet={place.snippet}
        />
        <Grid item container>
          <Grid item xs={12} className={classes.cityRow}>
            <form>
            
              
  <Button variant="contained" style={{ width: "20%", marginLeft: '40%', marginRight: '40%', marginTop: '10px', marginBottom: '10px', background: '#33882D', fontFamily: 'serif'}} disableElevation type="submit" >
                New Search
              </Button>
            </form>
          </Grid>
        </Grid>

        <Grid item container display="row">
          {/* map through daytrip items */}
          {dayTrip.map((item) => (
            <Grid key={item.description} item xs={12}>
              <DayTrip
                title={item.title}
                description={item.description}
                snippet={item.snippet}
                name={item.poi.name}
                score={Math.round(item.poi.score)}
                attribution={item.poi.attribution}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );

    // STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!! STATE FOUR!
  } else if (stateOne && stateTwo && stateThree && stateFour) {
    return (
      <div>
        <Nav updateUser={props.updateUser} />
        <img src = {require("../img/state-4.png")} className={classes.image} ></img>
        <Location name={place.name} snippet={place.snippet} />
        <Grid item container>
          <Grid item xs={12} className={classes.cityRow}>
            <h3>Click on the heart icons to add an item to your trip.</h3>
            <h4>You can restart your search by clicking the 'new search' button.</h4>
<form>
            <Button variant="contained" style={{ width: "20%", marginLeft: '40%', marginRight: '40%', marginTop: '10px', marginBottom: '10px', background: '#33882D', fontFamily: 'serif', color: 'white'}} disableElevation type="submit" >
                New Search
              </Button>
            </form>
          </Grid>
        </Grid>

        <Grid item container spacing={2} className={classes.int}>
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
                    : require("../img/heart-earth-small.png")
                }
                attribution={item.attribution}
                userId={props.userId}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

  // STATE THREE!! STATE THREE!! STATE THREE!! STATE THREE!! STATE THREE!! STATE THREE!! STATE THREE!! STATE THREE!! STATE THREE!!
  else if (stateOne && stateTwo && stateThree && !stateFour) {
    return (
      <div>
        <Nav updateUser={props.updateUser} />
        <Location name={place.name} snippet={place.snippet} />
        <Grid item container style={{ position: "center" }}>
          <Grid item xs={12} className={classes.cityRow}>
          <form>
<Typography style={{backgroundColor: "#8CBF1C", color: '#060063', width: "100%", fontFamily: 'serif', fontSize: 30, textAlign: 'center'}}> Please choose if you would like to build a custom trip, or  plan a day trip! 
</Typography>
<Typography style={{backgroundColor: "#8CBF1C", color: '#060063', width: "100%", fontFamily: 'serif', fontSize: 30, textPosition: 'center'}}> You can begin a new search by clicking the 'new search' button!
</Typography>

</form>

            <form style={{ postion: 'center' }}>
              <Button variant="contained"  style={{ width: "20%", marginLeft: '40%', marginRight: '40%', marginTop: '10px', marginBottom: '10px', backgroundColor: '#388e3c', fontFamily: 'serif', color: 'white'}} disableElevation type="submit" >New Search</Button>
            </form>
          </Grid>
        </Grid>
        {/* compontent for options (day trip or places) */}
        <Grid item container display="row" className={useStyles.options}>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={10}>
            <Options handleDay={handleDay} handleInterest={handleInterest} />
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </div>
    );
  }
  // STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!! STATE TWO!!!
  else if (stateOne && stateTwo && !stateThree && !stateFour) {
    return (
      <div>
        <Nav updateUser={props.updateUser} />
        <Grid item container>
          <img src = {require("../img/state-2.png")} className={classes.image} ></img>
        </Grid>

        <Grid item container>
          <Grid item xs={12} className={classes.cityRow}>
            <form style={{ postion: 'center' }}>

              <input
                style={{ width: '50%', height: '50px', marginLeft: '25%', marginRight: '25%', marginTop: '10px', fontFamily: 'serif', fontSize: '20px' }}
                placeholder="Choose a Different Destination..."
                onChange={handleInputChange}
              ></input>
            </form>
            <form>

              <Button variant="contained" style={{ width: "20%", marginLeft: '40%', marginRight: '40%', marginTop: '10px', marginBottom: '10px', background: '#E0E0E0E0', fontFamily: 'serif' }} disableElevation type="submit" onClick={handleSubmit}>
                Search
              </Button>

            </form>
          </Grid>
        </Grid>
        <form>
<Typography style={{backgroundColor: "#8CBF1C", color: '#060063', width: "100%", fontFamily: 'serif', fontSize: 30, textAlign: 'center' }}>  Which {searchTerm} you would like to go to? Or search for new destination!
</Typography>
</form>


        <Grid item container>
          {city.map((item) => (
            <Grid key={item.id} item xs={6} sm={4} md={3}>
              <City
                key={item.id}
                name={item.name}
                state={item.parent_id}
                country={item.country_id}
                id={item.id}
                handleThree={handleThree}
                snippet={item.snippet}
                image={
                  item.images[0]
                    ? item.images[0].sizes.medium.url
                    : require("../img/heart-earth-small.png")
                }
                userId={props.userId}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
  // STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!! STATE ONE!!
  else if (stateOne && !stateTwo && !stateThree && !stateFour) {
    // this is the default return of the component
    return (
      <div style={{ backgroundColor: "blue" }}>
        <Nav updateUser={props.updateUser} />
        <Grid item container> 
          <img src={require("../img/state-1.png")} className={classes.image} ></img>
        </Grid>
        {/* buttons container */}
        <Grid item container>

      
<Typography style={{backgroundColor: "#8CBF1C", color: '#060063', width: "100%", fontFamily: 'serif', fontSize: 32, textAlign: 'center'}}> Pick a city you would like to visit! Or go to the Profile Page to see your saved trips! 
</Typography>

          <Grid item xs={12} className={classes.cityRow}>
            <form style={{ postion: "center" }}>
              <input

                style={{ width: '62%', height: '50px', marginLeft: '19%', marginRight: '19%', marginTop: '40px', fontFamily: 'serif', fontSize: '20px' }}
                placeholder="Please Choose a Destination..."
                onChange={handleInputChange}
              ></input>
              <Button variant="contained" style={{ width: "20%", marginLeft: '40%', marginRight: '40%', marginTop: '10px', marginBottom: '20px', background: '#E0E0E0E0', fontFamily: 'serif' }} disableElevation type="submit" onClick={handleSubmit}>
                Search
              </Button>
            </form>

            <Credits />
 
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
