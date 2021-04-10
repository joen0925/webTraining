import React from "react";
import MiniCanlendar from "../miniCanlendar/MiniCanlendar";
import Weather from "../Weather/Weather";
const Home_footer = (props) =>{
    const change2False= () =>{
        setText(false);
    }
    return(
        <div className = "footer">
            <div className = "footer-item1"><MiniCanlendar/></div>
            <div className = "footer-item2"><Weather/></div>
        </div>
    )
}

export default Home_footer;