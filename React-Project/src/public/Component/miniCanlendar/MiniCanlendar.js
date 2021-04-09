import React from "react";
import "../../Css/MiniCanlendar.css";
const MiniCanlendar = () =>{
    var today = new Date();
    const formatData = (n) =>{
        return n < 10 ? "0"+n :""+ n;
    }
    const miniCanlendar = {
        month : formatData(today.getMonth() + 1),
        date : formatData(today.getDate())
    }
    return(
        <div className="miniCanlendar">
            <div>{miniCanlendar.month}</div>
            <div name="斜線"></div>
            <div>{miniCanlendar.date}</div>
        </div>
    )
}

export default MiniCanlendar;
