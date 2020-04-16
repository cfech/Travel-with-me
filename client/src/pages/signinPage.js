//Imports
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import API from '../utils/API'
import toast from "../components/toast.js"

//Styling
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://shershegoes.com/wp-content/uploads/inspirational-quotes.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  links: {
    "&:hover": {
      color: "black",
    },
    color: "black",
    textDecoration: "none",
  },

}));

//Signin component
export default function SignInSide(props) {
  const classes = useStyles();

  //Copyright 
  function Copyright() {
    return (
      <Typography className={classes.links} variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Travel-with-Me
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  //Username hook
  const [usernameText, setUsernameText] = useState("");

  //Setting the state of username
  const handleInputChangeUserName = (event) => {
    setUsernameText(event.target.value);
    console.log(usernameText);

  };

  //Password Hook
  const [passwordText, setPasswordText] = useState("");

  //Setting the state of password
  const handleInputChangePassword = (event) => {
    setPasswordText(event.target.value);
    console.log(passwordText);

  };

  //Redirect hook
  const [redirect, setRedirect] = useState("");

  const [wrongInfo, setWrongInfo] = useState(false)

  // Called when we click our signIn button
  const handleSignIn = (event) => {
    event.preventDefault()
    console.log('handleSubmit')

    API.login({
      userName: usernameText,
      password: passwordText
    })
      .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
          // update App.js state
          props.updateUser(
          //   {
          //   // loggedIn: true,
          //   // userName: response.data.userName,
          //   // firstName: response.data.firstName,
          //   // lastName: response.data.lastName
          
          // }
          
          response.data
          )
          // update the state to redirect to home
          setRedirect(
            '/home'
          )
        }
      }).catch(error => {
        console.log('login error: ')
        console.log(error);
        setWrongInfo(true)

      })
  }


  //If redirect is true , redirect to the path name or else show the sign in component
  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />
  } else if(wrongInfo){
    return(

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
          </Typography>

            
              <Box component="span" visibility="visible" p={1} m={1} bgcolor="background.paper">
                Invalid user name and password combination!
              </Box>
          
  
  
            <Typography visibility="hidden" component="h1" variant="h5" >

            </Typography>

            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={handleInputChangeUserName}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChangePassword}
              />
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSignIn}
              >
                Sign In
            </Button>
              <Grid container>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                  <Link href="/signUp" variant="body2" className={classes.links} >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  } 
  else {
    return (

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
          </Typography>

            
              <Box component="span" visibility="hidden" p={1} m={1} bgcolor="background.paper">
                Invalid user name and password combination!
              </Box>
          
  
  
            <Typography visibility="hidden" component="h1" variant="h5" >

            </Typography>

            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={handleInputChangeUserName}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChangePassword}
              />
             
    
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSignIn}
              >
                Sign In
            </Button>
              <Grid container>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                  <Link href="/signUp" variant="body2" className={classes.links} >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}
