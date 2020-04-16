//Imports
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Nav from "../components/Nav"
import tripApi from "../utils/tripApi"
import itemApi from "../utils/item"
import MyTrips from "../components/Mytrips/myTrips"



const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    color: "#03355F",
  },
  displayed: {
    alignContent: "center"


  }

}));



//Saved page component
function savedPage(props) {
  console.log(props)


  console.log("users saved page")
  console.log(props.user)

  useEffect(() => {
    if (props.userId) {
      console.log(props.userId)
      getUserTrips()
      getUserTripItems()
    }
  }, [props.userId])



  const [trips, setTrips] = useState([])

  const getUserTrips = () => {
    console.log(props.userId)
    tripApi.getUserTrips(props.userId)
      .then((res) => {
        console.log(res.data);
        setTrips(res.data)
      })
  }


  const [tripItem, setTripItems] = useState([])

  const getUserTripItems = () => {
    itemApi.getTripItems(props.userId)
      .then((res) => {
        console.log(res.data);
        setTripItems(res.data)
      })
  }


  console.log(props.userId)

  let tripPlaces = []
  const classes = useStyles();
  return (

    <div>
      <Nav updateUser={props.updateUser} />






      <Grid item container display="row">
        <Grid item xs={2} sm={3} md={4}></Grid>
        <Grid item xs={8} sm={6} md={4} className={classes.header} >
          <h1 >Your Saved Trips!</h1>
        </Grid>
        <Grid item xs={2} sm={3} md={4}></Grid>
      </Grid>


      {trips.map((trip) => (
        <Grid item container display="row" className={classes.displayed}>
          <>
            <Grid item xs={2} sm={3} md={4}></Grid>
            <Grid item xs={8} sm={6} md={4}>
              <MyTrips
                tripItem={tripItem}
                name={trip.name}
                country={trip.country}
                mainId={trip._id}
                key={trip._id}
                getUserTrips={getUserTrips
                }
                getTripItems={getUserTripItems}
              />
            </Grid>
            <Grid item xs={2} sm={3} md={4}></Grid>
          </>
        </Grid>
      ))}
    </div>
  )

}

export default savedPage;
