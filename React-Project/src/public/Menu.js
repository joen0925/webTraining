import React from "react";
import {HashRouter as Router, Switch,Route,Link} from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About";
import Hot from "./Component/Hot";
import Report from "./Component/Report";
import Weather from "./Component/Weather/Weather";
import "./Css/Menu.css";

const Menu = () => {
    return(
    <Router>
      <div className="a">
            <div className="flex">              
              <Link className="flex-item" to="/report">連絡我們</Link>
              <Link className="flex-item">｜</Link>
              <Link className="flex-item" to="/about">關於我們</Link>
            </div>
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/report">
          <Report/>
          </Route>
          <Route path="/hot">
          <Hot/>
          </Route>
          <Route path="/about">
          <About/>
          </Route>
        </Switch>
      </div>
    </Router>
    )
}

export default Menu;

