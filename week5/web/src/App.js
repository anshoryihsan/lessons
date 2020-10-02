import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./Components";

import { Home, Transfer } from "./pages";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/transfer">
          <Transfer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;