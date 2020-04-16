import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  sections: {
    background: "white",
    color: "#03355F",
    fontSize: 14,
    textAlign: "center"
  },
  bar: {
    backgroundImage: "linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)",
    height: 30
  }

}));



const Credits = () => {
  const classes = useStyles();
  return (

    <>
      <Grid item container display="row">
        <br />
        <Grid item xs={12}><Typography className={classes.bar}>
          row across the bottom row acrosss
        </Typography></Grid>
        {/* first area */}
        <Grid item xs={12} sm={4}><Typography className={classes.sections}>  <Box>Created By:</Box>  <Box>Ha Nguyen</Box>   <Box>Connor Fech</Box> <Box>Walt Ribeiro</Box>  <Box>Jon Butler</Box></Typography></Grid>
        {/* second area */}
        <Grid item xs={12} sm={4}><Typography className={classes.sections}><Box>Technologies used:</Box>
          <Box>1</Box><Box>2</Box><Box>3</Box><Box>4</Box></Typography></Grid>
        {/* third area */}
        <Grid item xs={12} sm={4}><Typography className={classes.sections}>first</Typography></Grid>







      </Grid>

    </>
  )
}

export default Credits;
