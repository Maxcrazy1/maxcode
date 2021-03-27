import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/admin";
import Login from "./pages/admin/login";
import Home from "./pages/client";
import About from "./pages/client/About";
import Contact from "./pages/client/Contact";
import { AuthContext } from "./pages/admin/context/authContext";

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
