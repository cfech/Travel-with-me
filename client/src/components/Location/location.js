//Imports 
import React from "react";
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

//Styling
const useStyles = makeStyles(() => ({
  media: {
    height: 300,
    margin: 0,
    width: "100%"
  },
  snip: {
    fontSize: 16
  },
  cityRow: {
    background: 'rgb(163, 187, 230)',
    margin: 0,
    justifyContent: "space-around"
  }
}));

//Location component
const Location = ({ name, snippet }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item container>
        <Grid item xs={12} className={classes.cityRow}>
          <h2><p>{name}: <span className={classes.snip}>{snippet}</span></p></h2>
        </Grid>
      </Grid>
    </>
  );
};
export default Location;
