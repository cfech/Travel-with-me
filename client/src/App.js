import React from "react";
import Nav from "./components/Nav";
import itemPage from "./pages/itemPage";
import savedPage from "./pages/savedPage";
import singIn from "./pages/signinPage";
import Footer from "./components/footer/index";
import singUp from "./pages/singUp";
import "./styles/styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/homepage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={singIn} />
          <Route exact path="/saved" component={savedPage} />
          <Route exact path="/item" component={itemPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signUp" component={singUp} />
          <Route exact path="*" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
