import React from "react";
// import Books from "./pages/Books";
import Nav from "./components/Nav";
import Homepage from "./pages/homepage";
import Footer from "./components/footer/index"
import "./styles/styles.css"
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>

        <Nav />
        <Switch>

          <Route exact path="/" component= {Homepage} />
     

        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
