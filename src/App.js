import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./admin/pages/index";
import Login from "./admin/pages/login";
import Home from "./client/pages/index";
import About from "./client/pages/About";
import Contact from "./client/pages/Contact";
import { AuthContext } from "./admin/context/authContext";

export default function Dashboard() {
  return (
    <AuthContext>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/panel">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </AuthContext>
  );
}
