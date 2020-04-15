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
  


  useEffect (() => {
    if(props.userId){
      console.log(props.userId)
      getUserTrips()
      getUserTripItems()
    }
  },[props.userId])




  const [trips, setTrips] = useState([])

  const getUserTrips = () => {
   console.log( props.userId)
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
      // setTripItems(res.data)
      })
  }


// useEffect (() => {
//     console.log("getting trips and items")
    
//     // getUserTripItems()
//   },[trips])

  console.log(props.userId)

  return(
   <div>



    <Nav updateUser ={props.updateUser} />
<h1>Your Saved Trips!</h1>

<div> trips

{/* {
trips.map(trips => {
  <div
})


} */}




</div>



 </div>
  )

}

export default savedPage;
