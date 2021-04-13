import React,{useState,useEffect} from "react";
import Backbutton from "../Images/Backbutton.png";
import "../Css/Contact_us.css";
const Contact_us = () =>{
    return(
        <div className = "Countact_us-flex">
            {console.log(location.hash)}
            <img className = "Countact_us-flex-backbutton" src={Backbutton} onClick={()=>{history.back();}}/>
            <div className = "Countact_us-flex-title">Countact us</div>
            <div className = "Countact_us-flex-countact">
                <div style={{display:"flex", flexDirection:"column",alignItems:"flex-end"}}>
                    <input type="text"></input>
                    <button type="submit">SENT</button>
                </div>
            </div>
        </div>
        
             
    )
}

export default Contact_us;