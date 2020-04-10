import React from "react";
import itemPage from "./pages/itemPage";
import savedPage from "./pages/savedPage";
import signIn from "./pages/signInPage";
import Footer from "./components/footer/index";
import signUp from "./pages/signUp";
import "./styles/styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/homepage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={signIn} />
          <Route exact path="/saved" component={savedPage} />
          <Route exact path="/item" component={itemPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signUp" component={signUp} />
          <Route exact path="*" component={signIn} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
