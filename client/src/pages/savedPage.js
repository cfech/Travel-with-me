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

  const getUserTrips = () => {
    tripApi.getUserTrips(props.userId)
      .then((res) => {
        console.log(res.data);
      })
  }

  useEffect (() => {
    getUserTrips()
  })


  console.log(props.userId)

  return <div>
    <Nav />


    savedpage</div>;
}

export default savedPage;
