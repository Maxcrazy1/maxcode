import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/admin";
import Home from "./pages/client";
import About from "./pages/client";
export default function Dashboard() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/panel">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}
