import React from "react";
import Menu from "./public/Menu";
import {HashRouter as Router, Switch,Route,Link} from "react-router-dom";

const App = () => {
    return(
      <div>
        <h1 style={{color:"black",fontFamily:"Microsoft JhengHei"}}>我是第一頁</h1>
        <Menu/>
      </div>
    )
}

export default App;