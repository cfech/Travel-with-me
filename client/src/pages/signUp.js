//Imports
import React, { useEffect, useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Api from "../utils/API";
import {Redirect} from "react-router-dom";

//Styling
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
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


//SignUp component
export default function SignUp() {

  const classes = useStyles();

  //Redirect hook
  const [redirect, setRedirect] = useState("");
  
  //Hook for username
  const [userName, setUserName] = useState("");
  

  //handle input change for username 
  const handleInputChangeU = (event) => {
    setUserName(event.target.value);
    console.log(userName);
  };

  //Password hook
  const [password, setPassword] = useState("");

  //Handle input change for password
  const handleInputChangeP = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  //firstName hook
  const [firstName, setFirstName] = useState("");

  //Handle input change for first name 
  const handleInputChangeFirst = (event) => {
    setFirstName(event.target.value);
    console.log(firstName);

  };

  //Last name hook
  const [lastName, setLastName] = useState("");

   //Handle input change for last name 
  const handleInputChangeLast = (event) => {
    setLastName(event.target.value);
    console.log(lastName);
  };

  //Saving person in database 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked")
    Api.saveUser(
      {
      firstName, lastName, userName, password
      }
    ).then((res) => {
      console.log("user created");
    setRedirect("/")
    })
    .catch(error => {
      console.log(error)
    })
  };

  //If redirect is true redirect, or else show signup page
  if (redirect) {
    return <Redirect to={{ pathname: redirect }} />
  } else {

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleInputChangeFirst}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={handleInputChangeLast}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="userName"
                onChange={handleInputChangeU}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleInputChangeP}
                autoComplete="current-password"
              />
            </Grid>
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="space-around">
            <Grid item>
              <Link href="/" variant="body2" className={classes.links}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
  }
}
