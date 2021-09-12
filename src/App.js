import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Views
import Homes from "./views/Homes";
import Lots from "./views/Lots";
import Error from "./views/Error";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/homes">
          <Homes />
        </Route>
        <Route exact path="/lots">
          <Lots />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
