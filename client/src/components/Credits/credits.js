import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

//Styling
const useStyles = makeStyles((theme) => ({
  sections: {
    background:"#EEC217",
    color: "#03355F",
    fontSize: 16,
    textDecoration: "none",
    textAlign: "center",
    "&:hover": {
      color: "#03355F",
    },
  },
  top:{
    background:"#EEC217",
    color: "#03355F",
    fontSize: 13,
    marginBottom:5
  },
  column:{
    textAlign:"right"
    
  },
  space:{
    marginBottom:3
  },
  test:{
    height:100,
    marginBottom:10
  }
}));

//Credit component
const Credits = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item container display="row">
        <br />
        <Grid item xs={12}><Box className={classes.test}>
        
        </Box></Grid>
        {/* first area */}
        <Grid item xs={6} sm={4}>
        <Tooltip title="Check us out on Github." placement="top-end"><Box className={classes.column}>
            <Box className={classes.top}>Created By:</Box> 

            <Box className={classes.space}><a href="https://github.com/iamha1" target="_blank"
              rel="noopener noreferrer" className={classes.sections}>Ha Nguyen</a></Box> 

            <Box className={classes.space}><a href="https://github.com/cfech" target="_blank"
              rel="noopener noreferrer" className={classes.sections}>Connor Fech</a></Box>

                <Box className={classes.space}><a href="https://github.com/waltribeiro" target="_blank"
              rel="noopener noreferrer" className={classes.sections}>Walt Ribeiro</a></Box>

                  <Box className={classes.space} ><a href="https://github.com/JBdunks" target="_blank"
              rel="noopener noreferrer" className={classes.sections}>Jon Butler</a></Box>
              
              </Box>
              </Tooltip></Grid>
        {/* second area */}
        <Grid item xs={6} sm={4}><Box className={classes.sections}>
          <Box className={classes.top}>Technologies used:</Box>
          <Box className={classes.space}>React</Box>
          <Box className={classes.space}>Material-Ui</Box>
          <Box className={classes.space}>Node.js</Box>
          <Box className={classes.space}>Mongo DB</Box>
          </Box>
          </Grid>
        {/* third area */}
        <Grid item xs={false} sm={4}><Box className={classes.sections}></Box></Grid>
      </Grid>
    </>
  )
}

export default Credits;
