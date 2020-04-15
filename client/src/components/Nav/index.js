//Imports
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link, Redirect } from "react-router-dom"

import Icon from '@material-ui/core/Icon';
import HomeIcon from '@material-ui/icons/Home';
import Api from "../../utils/API"
// import AccountBoxIcon from '@material-ui/icons/AccountBox';
// import SaveIcon from '@material-ui/icons/Save';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';


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
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(2, 100, 2, 20),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(10)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

//Nav bar component
export default function SearchAppBar() {
  const classes = useStyles();

  const [redirect, setRedirect] = useState("")

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

  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />
  } else {
    return (

      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <form> <Typography className={classes.title} style={{ fontFamily: 'serif', fontSize: "35px", position: 'left', marginLeft: '15px' }} noWrap>
              Travel-with-Me
            </Typography>
            </form>
            <Typography className={classes.title} style={{ marginLeft: "700px" }} >

              <Link className="navbar-brand" to="/home" style={{ fontSize: '20px' }}> <HomeIcon></HomeIcon>  </Link>

              <Link className="navbar-brand" to="/saved" style={{ fontFamily: 'serif', marginLeft: '10px', fontSize: "20px", postion: 'right' }} > Saved </Link>

              <button onClick={logout}>Log Out</button>


            </Typography>

          </Toolbar>
        </AppBar>
      </div>
    );
  }

}
