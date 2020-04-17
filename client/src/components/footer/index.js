//Imports
import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


//Styling
const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'rgb(163, 187, 230)',
    height: 30,
    color: 'white',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontSize: 15,
    position: "static",
    top: 'auto',
    bottom: 0,
    width: "100%",
    marginTop: 10
  }, 
}));

//Copyright note
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/cfech/TravelApp">
        Travel-with-Me Github
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//Footer component
function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Copyright />
    </footer>
  );
}

export default Footer;
