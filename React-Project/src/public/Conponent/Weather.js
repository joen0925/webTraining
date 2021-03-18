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
            const locationdata = result.records.location[0];
            const weatherStatus = locationdata.weatherElement.reduce((accumulator, currentValue) =>{
                if(["Wx","PoP","MinT","CI","MaxT"].includes(currentValue.elementName)){
                    accumulator[currentValue.elementName] = currentValue.time;
                }
                return accumulator;
            },{});
            console.log("fetch區塊:" + locationdata.locationName);
            console.log("fetch區塊:" + weatherStatus.Wx[0].startTime);
            setData({
                ...data,
                locationName: locationdata.locationName,
            })
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
            {console.log("123")}
            {console.log(data.locationName)}
        </div>
    )

}

export default Weather;