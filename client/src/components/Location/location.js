import React from "react";
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(() => ({

  media: {
    width: "100%",
    height: 300,
    margin: 0,
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


const Location = ({ name, snippet, image }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item container>
        <Grid item xs={12}>
          <img className={classes.media} src={image} alt={name} />
        </Grid>
        <Grid item xs={12} className={classes.cityRow}>
          <p><h2>{name}: <span className={classes.snip}>{snippet}</span></h2></p>
        </Grid>
      </Grid>
    </>
  );
};
export default Location;
