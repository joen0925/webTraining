import React from "react";
import  DayClear  from "../Images/iconfinder_weather_4_2682847.svg";


const Weather_icon = (props) =>{
    return(
        <div>
            <img src={DayClear} style={{maxHeight:"50px"}}/>
        </div>        
    );
}

export default Weather_icon;