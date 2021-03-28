import React,{useState} from "react";
const WeatherCount = (props) =>{
    const counter = (c) => {
        console.log(props.count)
        var p = 0;
        p += c;
        if (p >= 0 && p < 3){
            props.setCount(p);
        }else{
            props.setCount(0);
        }
    }
    return(
        <div style = {{flexGrow:"2",backgroundColor: "rgb(164, 247, 219)"}}>
            <button onClick = {() => counter(-1)} >{"<"}</button>
            <button onClick = {() =>　counter(1)} >{">"}</button>
            {console.log("new" + props.count)}
        </div>
    )
}

export default WeatherCount;