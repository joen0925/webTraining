import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./public/Menu";

const App = (props) => {
    const style = useSelector(state => state);
    return(
        <div style={style}>
          {console.log(style)}
          <Menu/>
        </div>
      
    )
}

export default App;