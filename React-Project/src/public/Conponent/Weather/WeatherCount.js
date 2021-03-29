import React,{useState,useEffect} from "react";
const WeatherCount = (props) =>{
    const [count,setCount] = useState(0);
    useEffect(() => {
        counter();
    },[count])
    const counter = () => {
        console.log("counter:" + count);
        if (count >= 0 && count < 3){
            props.setCount(count);
        }else{
            props.setCount(0);
            setCount(0);
        }
    }
    return(
        <div style = {{flexGrow:"2",backgroundColor: "rgb(164, 247, 219)"}}>
            <button onClick = {() => setCount(count - 1)} >{"<"}</button>
            <button onClick = {() => setCount(count + 1)} >{">"}</button>
            {console.log("out:" + props.count)}
        </div>
    )
}

export default WeatherCount;