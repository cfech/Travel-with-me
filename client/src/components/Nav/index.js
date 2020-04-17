//Imports
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from "react-router-dom"
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import Api from "../../utils/API"
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//styling 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#00355F",
    fontFamily: 'serif',
  },
  links: {
    color: "#00355F",
    textDecoration: "none",
    fontSize: 20,
    fontFamily: 'serif',
  },
  home: {
    color: "#00355F",
    fontSize: 30,
    fontFamily: 'serif',
  },
  navBar: {
    background: "#F5c71a"
  }
}));

//Nav bar component
export default function SearchAppBar() {
  const classes = useStyles();

  const [redirect, setRedirect] = useState("")

  //Logout functionality
  const logout = () => {
    Api.logout().then(response => {
      console.log(response.data)
      if (response.status === 200) {
        setRedirect("/")
      }
    }).catch(error => {
      console.log('Logout error')
      console.log(error)
    })
  }

  //If yu click logout, redirect the page, if not show the current page
  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />
  } else {
    return (

      <div className={classes.root}>
        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Travel-with-Me
          </Typography>
            <IconButton>
              <Tooltip title="Home"><Link to="/home" > <HomeIcon className={classes.home} />  </Link></Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="My Trips"><Link className={classes.links} to="/saved"  > <FavoriteIcon/> </Link></Tooltip>
            </IconButton>
            <Tooltip title="Log Out"><IconButton className={classes.links} onClick={logout}><ExitToAppIcon/></IconButton></Tooltip>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}