import React,{useState,useEffect} from 'react';
import Weather from './Weather/Weather';
const Report = () =>{
    return(
        <form>
            <input type="text" placeholder="問題回報" style={{width: "40%", height: "250px"}}></input><br/>
            <button type="submit">送出</button>
        </form>
             
    )
}

export default Report;