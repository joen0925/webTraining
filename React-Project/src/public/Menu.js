import React from "react";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import Home from "./Conponent/Home";
import About from "./Conponent/About";
const Menu = () => {
    return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    </Router>
    )
}

export default Menu;