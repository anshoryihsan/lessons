import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { HeaderNav } from "./Components";

import { Home, Transfer } from "./pages";
function App() {
  return (
    <Router>
      <HeaderNav />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/transfer" render={(props) => <Transfer {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
