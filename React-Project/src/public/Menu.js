import React,{useState} from "react";
import {HashRouter as Router, Switch,Route,Link} from "react-router-dom";
import { useDispatch, useSelector, useStore } from "react-redux";
import {changeBackgroundColor2LightBlue,titleListOnClick,changeBackgroundColor2Blue,titleListOffClick} from "./Model/Action"; 
import Home from "./Component/Home/Home";
import About from "./Component/About";
import Contact_us from "./Component/Contact_us";
import "./Css/Menu.css";


const Title_list = () =>{
    const dispatch = useDispatch();
    window.addEventListener("popstate", e => {
      if(location.hash == "#/"){
        dispatch(changeBackgroundColor2Blue);
        dispatch(titleListOffClick);
      }
  });
    const changeColorAndTitle = () =>{
        dispatch(changeBackgroundColor2LightBlue);
        dispatch(titleListOnClick);
    }
    return(
      <div className="flex">              
              <Link className="flex-item" to="/contact_us" onClick = {() =>changeColorAndTitle()}>連絡我們</Link>
              <Link className="flex-item" to="/#">｜</Link>
              <Link className="flex-item" to="/about" onClick = {() => changeColorAndTitle()}>關於我們</Link>
            </div>
    )
}
const Menu = () => {
    const titleListClick = useSelector(state => state.titleList);
    return(
    <Router>
      <div>
          {titleListClick ? <div className="flex"></div> : <Title_list/>}
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/contact_us">
          <Contact_us/>
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

