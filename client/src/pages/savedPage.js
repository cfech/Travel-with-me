//Imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../components/API";
import { makeStyles } from "@material-ui/styles";
import Nav from "../components/Nav"
import tripApi from "../utils/tripApi"
import itemApi from "../utils/item"

//Saved page component
function savedPage(props) {
  console.log(props)



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

  const tripDelete = () => {
    console.log("clicked")
  }
  const itemDelete = () => {
    console.log("clicked")
  }
  // useEffect (() => {
  //     console.log("getting trips and items")

  //     // getUserTripItems()
  //   },[trips])

  console.log(props.userId)

  return (
    <div>



      <Nav updateUser={props.updateUser} />
      <h1>Your Saved Trips!</h1>

      <div> trips

      {trips.map((trip) => (
        <div key={trip._id}>

          <div>{trip.name}, {trip.state}, {trip.country}</div>
          <button onClick={tripDelete}>delete</button>

          {tripItem.map((item) => (
            <div key={item._id}>
                
              <div>{item.name}</div>
              <button onClick={itemDelete}>delete</button>
            </div>

          ))}

        </div>

      ))}


        {/* {trips.map((trip) => (
        <div key={trip._id}>

          <div>{trip.name}, {trip.state}, {trip.country}</div>
          <button onClick={tripDelete}>delete</button>

          { trip = tripItem.map(function (item) {

            if(trip._id === item.tripId){
            return 
            <div key={item._id}>
                
              <div>{item.name}</div>
              <button onClick={itemDelete}>delete</button>
            </div>
            
          }
          else{

          }
        })
      }
       

        </div>

      ))} */}
        {/* {
          row = this.props.cells.map(function (cell, i) {

            if (cell.URL != null && cell.URL.length > 0) {
              return <td className={cell.Meta.HTMLClass} key={i}>{cell.Text}</td>;
            }
            else {
              return <td className={cell.Meta.HTMLClass} key={i}>{cell.Text}</td>;
            }

          }.bind(this))
        } */}

        
      </div>


    </div>
  )

}

export default savedPage;
