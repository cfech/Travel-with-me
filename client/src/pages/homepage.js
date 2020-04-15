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
import CityApi from "../components/CITY"




function Home() {
  // Setting our component's initial state
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [place, setPlace] = useState({});
  const [interest, setInterest] = useState([]);
  const [daySearch, setDaySearch] = useState("");
  const [dayTrip, setDayTrip] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState([]);
  const [stateOne, setStaetOne] = useState(true)
  const [stateTwo, setStateTwo] = useState(false)
  const [stateThree, setStateThree] = useState(false)
  const [stateFour, setStateFour] = useState(false)
  const [stateFive, setStateFive] = useState(false)


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




  // need error validation for blank search term

  //search to set the city using return from city search
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

  // point of interest search
  const PoiSearch = () => {
    Poi.ApiSearch(lat, long)
      .then((res) => {
        console.log(res.data.results[0].pois);
        console.log(res.data.results[0].pois[1].images.sizes);
        setInterest(res.data.results[0].pois);
      })
      .catch((err) => console.log(err));
  };

  // day trip search
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

  //city search

  const CitySearch = () => {
    CityApi.ApiSearch(searchTerm)
      .then((res) => {
        console.log("city search");
        console.log(res.data.results)
        setCity(res.data.results)

      })
  }
  // input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  //city search
  const handleSubmit = (event) => {
    event.preventDefault();

    setStateTwo(true)
    console.log("clicked");
    console.log(stateTwo)
    CitySearch();
  };


  const handleThree = (event, id) => {
    event.preventDefault();
    console.log("three!!")
    setStateThree(true)
    console.log(id)
    ApiSearch(id)


  }

  // point of interest
  const handleInterest = (event) => {
    event.preventDefault();
    PoiSearch();
    setStateFour(true)
    console.log("poisearch");

  };

  // day search 
  const handleDay = (event) => {
    event.preventDefault();
    DaySearch();
    setStateFive(true)
    console.log("day search")
  }






  if (error) {
    return (
      <>
        <Nav />
        <form>
          <input
          style={{width: '800px'}}
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
          name={place.name}np
          snippet={place.snippet}
        // image={place.images[0].source_url}

        />
        <Grid item container>
          <Grid item xs={12} className={classes.cityRow}>
            <form>
              <Button variant="contained" color="primary" style={{width: "200px", marginLeft: '10px', marginTop: '10px'}} disableElevation type="submit">Reset</Button>
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
              <Button variant="contained" color="primary" style={{width: "200px", marginLeft: '10px', marginTop: '10px'}} disableElevation type="submit">Reset</Button>
            </form>

          </Grid>
        </Grid>

        style={{width: "200px", marginLeft: '10px', marginTop: '10px'}}



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
            <form>
              <input
                placeholder="location search3"
                onChange={handleInputChange}
              ></input>

              <Button variant="contained" color="primary" style={{width: "200px", marginLeft: '10px', marginTop: '10px'}} disableElevation type="submit" onClick={handleSubmit}>
                Search
        </Button>
            </form>

            <Button variant="contained" color="primary" style={{width: "200px", marginLeft: '35px', marginTop: '10px'}}disableElevation type="submit" onClick={handleSubmit}>
                Show Interest
              </Button>
            <Button variant="contained" color="primary" style={{width: "200px", marginLeft: '10px', marginTop: '10px'}} disableElevation >Day Trip</Button>
            
            <form>
              <Button variant="contained" color="primary" style={{width: "200px", marginLeft: '10px', marginTop: '10px'}} disableElevation type="submit">Reset</Button>
            </form>
          </Grid>
        </Grid>

        {/* <Grid item container>
          {city.map((item) => (
            <City
              name={item.name}
              state={item.parent_id}
              country={item.country_id}
              id={item.id}
              handleThree={handleThree}
            />

          ))}

        </Grid> */}

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
          <Grid item xs={12} className={classes.cityRow}>
            <form>
              <input
                placeholder="location search2"
                onChange={handleInputChange}
              ></input>

<Button variant="contained" color="primary" style={{width: "200px", marginLeft: '35px', marginTop: '10px'}}disableElevation type="submit" onClick={handleSubmit}>
                Search
        </Button>
            </form>
          </Grid>
        </Grid>

       

        <Grid item container>
          {city.map((item) => (
            <City
              name={item.name}
              state={item.parent_id}
              country={item.country_id}
              id={item.id}
              handleThree={handleThree}


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
      <div style={{backgroundColor: 'blue'}}>
        <Nav />
        {/* <Grid item container>
          <Grid item xs={false} s={3} />
          <Grid item xs={12} s={6}>
            <img className={classes.media} image={require('../img/map-1.png')} />
          </Grid>
        </Grid> */}

        {/* buttons container */}
        <Grid item container>
          <Grid item xs={12} className={classes.cityRow}>
            <form>
              <input
              style={{width: '80%', height: '30px', marginLeft: '10px'}}
                placeholder="location search1"
                onChange={handleInputChange}
              ></input>

             
            </form>
  
            <Button variant="contained" color="primary" style={{width: "200px", marginLeft: '35px', marginTop: '10px'}}disableElevation type="submit" onClick={handleSubmit}>
                Search
              </Button>
            <Button variant="contained" color="primary" style={{width: "200px", marginLeft: '10px', marginTop: '10px'}} disableElevation >show interests</Button>
            <Button variant="contained" color="primary" style={{width: "200px", marginLeft: '10px', marginTop: '10px'}} disableElevation >Day Trip</Button>

          </Grid>
        </Grid>
      </div>
    );
    // } else {
    //   return (
    //     // loads when state is set to true during api call
    //     <>

    //       <Nav />

    //       <Location
    //         name={place.name}
    //         snippet={place.snippet}
    //         image={place.images[0].source_url}
    //       />
    //       {/* Buttons container */}
    //       <Grid item container>
    //         <Grid item xs={12} className={classes.cityRow}>
    //           <form>
    //             <input
    //               placeholder="location search"
    //               onChange={handleInputChange}
    //             ></input>
    //             <Button variant="contained" color="primary" disableElevation type="submit" onClick={handleSubmit}>
    //               Search
    //             </Button>
    //           </form>
    //           <Button variant="contained" color="primary" disableElevation onClick={handleInterest}>show interests</Button>
    //           <Button variant="contained" color="primary" disableElevation onClick={handleDay}>Day Trip</Button>
    //         </Grid>
    //         <Grid item xs={12} className={classes.empty}>

    //         </Grid>
    //       </Grid>
    //       <div>
    //         {/* map through daytrip items */}
    //         {dayTrip.map((item) => (
    //           <Grid key={item.description} item xs={12}>
    //             <DayTrip
    //               title={item.title}
    //               description={item.description}
    //               snippet={item.snippet}
    //               name={item.poi.name}
    //               score={Math.round(item.poi.score)}
    //             />
    //           </Grid>
    //         ))}
    //       </div>



    //     </>
    //   );
  }
}

export default Home;


