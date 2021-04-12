import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./public/Menu";
import "./public/Css/App.css"

const App = (props) => {
    const style = useSelector(state => state);
    return(
        <div className="App" style={style}>
          <Menu/>
        </div>
      
    )
}

export default App;