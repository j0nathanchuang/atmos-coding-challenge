import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./constants/routes";

function App() {
  return (
    <Router>
      <Switch>
        {Routes.map((route) => {
          const { path, component } = route;
          return (
            <Route exact path={path}>
              {component}
            </Route>
          )
        })}
      </Switch>
    </Router>
  );
}

export default App;
