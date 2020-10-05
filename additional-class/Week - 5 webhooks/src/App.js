import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Home, Users } from "./page";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        {/* <Route exact path="/">
          <Home />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
