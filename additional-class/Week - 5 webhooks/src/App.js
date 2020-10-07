import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Nav } from "./components";
import { Home, TransferSearch, TransferAmount, TransferConfirmation } from "./page";
const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/topup" render={(props) => <Home {...props} />} />
        <Route path="/profile" render={(props) => <Home {...props} />} />
        <Route exact path="/transfer" render={(props) => <TransferSearch {...props} />} />
        <Route path="/transfer/amount" render={(props) => <TransferAmount {...props} />} />
        <Route path="/transfer/confirmation" render={(props) => <TransferConfirmation {...props} />} />
      </Switch>
    </Router>
  );
};

export default App;
