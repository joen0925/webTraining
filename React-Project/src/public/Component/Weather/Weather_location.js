import React,{useState,useEffect} from "react";

const Weather_location = (props) => {
    const [optionsElement, setOptionsElement] = useState([])
    const url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314";
    useEffect(()=>{
        search();
    },[]);
    const search = () =>{
        fetch(url)
        .then((res) => res.json())
        .then(result => {
            let temp = [];
            const locationItem = result.records.location;
            for (var i = 0; i < locationItem.length; i++){
                temp.push(<option key ={i} value = {i}>{locationItem[i].locationName}</option>);
            }
            setOptionsElement(temp);
        })
    }
    return(
        <div>
            <select style = {{width:"100%", fontSize:"20px"}} onChange = {(e) => {props.setLocationTarget(e.target.value)}}>
                {optionsElement}
            </select>
        </div>
    )
}

export default Weather_location;