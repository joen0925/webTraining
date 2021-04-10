import React,{useState,useEffect} from 'react';
import Backbutton from "../Images/Backbutton.png";
import { useDispatch, useSelector } from "react-redux";
import {changeBackgroundColor2Blue} from "../Model/Action"; 
import "../Css/Contact_us.css";
const Contact_us = () =>{
    const dispatch = useDispatch();
    return(
        <div className = "Countact_us-flex">
            <img className = "Countact_us-flex-backbutton" src={Backbutton} onClick={()=>{history.back();dispatch(changeBackgroundColor2Blue)}}/>
            <div className = "Countact_us-flex-title">Countact us</div>
            <div className = "Countact_us-flex-countact">
                <form style={{display:"flex", flexDirection:"column",alignItems:"flex-end"}}>
                    <input type="text"></input>
                    <button type="submit">SENT</button>
                </form>
            </div>
        </div>
        
             
    )
}

export default Contact_us;