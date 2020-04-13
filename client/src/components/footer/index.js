import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'rgb(163, 187, 230)',
    height: 50,
    color: 'white',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    fontSize: 15,
    position: 'static',
    top: 'auto',
    bottom: 0,
  },
}));

function Copyright() {
  return (

    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Travel-with-Me
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Copyright />
    </footer>
  );
}

export default Footer;
