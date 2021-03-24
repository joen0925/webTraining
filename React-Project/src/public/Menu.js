import React from "react";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import Home from "./Conponent/Home";
import About from "./Conponent/About";
import Hot from "./Conponent/Hot";
import Report from "./Conponent/Report";
import styles from "./Css/Menu.css";

const Menu = () => {
  
    return(
    <Router>
      <div >
            <div className={styles.flex}>
              <Link className={styles.flex_1} to="/">新聞彙整系統</Link>
              <Link className={styles.flex_1} to="/report">問題回報</Link>
              <Link className={styles.flex_1} to="/hot">熱門搜尋</Link>
              <Link className={styles.flex_1} to="/about">關於</Link>
            </div>
        <Switch>
          <Route exact path="/">
          <Home className= "flex-1"/>
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

