import React,{useState, useEffect, useRef} from 'react';
const Weather = () =>{
    const [data,setData] = useState({
        locationName: "",
        weatherElement:[
        {
            elementName : "天氣現象",
            time :[
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"", 
                    }
                },
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"", 
                    }
                },
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"", 
                    }
                }
            ],
            elementName : "降雨機率",
            time :[
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"",
                    }
                },
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"",
                    }
                },
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"", 
                    }
                }
            ],
            elementName : "最低溫度",
            time :[
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"", 
                    }
                },
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"", 
                    }
                },
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"", 
                    }
                }
            ],
            elementName : "舒適度",
            time :[
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"", 
                    }
                },
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"", 
                    }
                },
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"", 
                    }
                }
            ],
            elementName : "最高溫度",
            time :[
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"", 
                    }
                },
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"", 
                    }
                },
                {
                    startTime:"",
                    endTime:"",
                    parameter:{
                    parameterName:"", 
                    }
                }
            ],
        }]
    });
    const [city,setCity] = useState([]);
    const mounted = useRef();
    const url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314";
    let citytemp = [];

    useEffect(()=>{
        /*
        if(mounted.current===false){
            mounted.current=true;
            searchCity();
        }
        else{

        }*/
        searchCity();
    },[])
    const handleChange = (e) =>{
        citytemp = e;
    }
    const searchCity = () =>{
        fetch(url)
        .then(res => {
        return res.json();
        }).then(result => {
            var location = result.records.location;
            var weatherStatus = result.records.location[0].weatherElement;
            for(let i = 0; i < location.length ; i++){
                citytemp.push(result.records.location[i].locationName);
            }
            citytemp = citytemp.map((citytemp)=><option onChange = {(e) =>{creatData(e.target.key)}} key={citytemp.toString()}>{citytemp}</option>)
            
            setCity(citytemp);
        })
    }
    const creatData = (cityName) =>{
        console.log("縣市:" + cityName);
        /*fetch(url)
        .then(res => res.json())
        .then(result => {
            const location = result.records.location;
        })*/
    }
    return(
        <div>
            <h3>36小時天氣預報</h3>
            <select >
                {city}
            </select>
        </div>
    )

}

export default Weather;