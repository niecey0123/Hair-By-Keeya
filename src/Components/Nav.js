import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from "./Contact";

import Home from './Home'

export default function App() {
  return (
    <Router>
      <div>
      <ul className="nav justify-content-center">
  <li className="nav-item">
  <Link className="nav-link active" to="/">Home</Link> 
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/prices">Prices</Link> 
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/contact">Contact</Link> 
  </li>
</ul>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/prices">
\          </Route>
          <Route path="/contact" component={Contact}></Route>
          <Route exact path="/" component={Home} ></Route>
        </Switch>
      </div>
    </Router>
  );
}

