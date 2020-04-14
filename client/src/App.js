import React from "react";
import SavedPage from "./pages/savedPage";
import SignIn from "./pages/signinPage";
import Footer from "./components/footer/index";
import SignUp from "./pages/signUp";
import "./styles/styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/homepage";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      userName: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/api/users/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          userName: response.data.user.userName
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          userName: null
        })
      }
    })
  }

  
  render() {

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" 
            render={() =>
              <SignIn
                updateUser={this.updateUser}
              />}/>
          <Route exact path="/saved" render={() => <SavedPage loggedIn={this.state.loggedIn} /> }/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="*" 
            render={() =>
              <SignIn
                updateUser={this.updateUser}
              />}
            />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
}

export default App;
