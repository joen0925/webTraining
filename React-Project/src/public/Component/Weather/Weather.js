import React,{useState, useEffect, useRef} from 'react';
import "../../Css/Weather.css";
import Weather_location from "./Weather_location";
const Weather = () =>{
    const [data,setData] = useState({
        locationName: "",
        weatherElement:[
            {
                elementName : "天氣現象",
                time :[
                    {
                        startTime: "",
                        endTime:"",
                        parameterName:"",
                        parameterValue:""
                    },
                    {
                        startTime: "",
                        endTime:"",
                        parameterName:"",
                        parameterValue:""
                    },
                    {
                        startTime: "",
                        endTime:"",
                        parameterName:"",
                        parameterValue:""
                    },
                ]
            },
            {
                elementName : "降雨機率",
                time :[
                    {
                        parameterName:"",
                    },
                    {
                        parameterName:"",
                    },
                    {
                        parameterName:"",
                    },
                ]
            },
            {
                elementName : "最低溫度",
                time :[
                    {
                        parameterName:"",
                    },
                    {
                        parameterName:"",
                    },
                    {
                        parameterName:"",
                    },
                ]
            },
            {
            elementName : "最高溫度",
                time :[
                    {
                        parameterName:"",
                    },
                    {
                        parameterName:"",
                    },
                    {
                        parameterName:"",
                    },
                ]
            }
        ]
    });
    const [count,setCount] = useState(0);
    const [locationTarget, setLocationTarget] = useState(0);
    const url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314";
    useEffect(()=>{
        const searchData = async() => {
            const apiData = await searchCity();
            setData(apiData);
        }
        searchData();
    },[locationTarget])
    const searchCity = () =>{
        fetch(url)
        .then(res => {return res.json();})
        .then(result => {
            const locationdata = result.records.location[locationTarget];
            const weatherStatus = locationdata.weatherElement.reduce((accumulator, currentValue) =>{
                if(["Wx","PoP","MinT","MaxT"].includes(currentValue.elementName)){
                    accumulator[currentValue.elementName] = currentValue.time;
                }
                return accumulator;
            },{});
            return{
                locationName: locationdata.locationName,
                weatherElement:[
                    {
                        elementName : "天氣現象",
                        time :[
                            {
                                startTime: weatherStatus.Wx[0].startTime,
                                endTime:weatherStatus.Wx[0].endTime,
                                parameterName:weatherStatus.Wx[0].parameter.parameterName,
                                parameterValue:weatherStatus.Wx[0].parameter.parameterValue
                            },
                            {
                                startTime: weatherStatus.Wx[1].startTime,
                                endTime:weatherStatus.Wx[1].endTime,
                                parameterName:weatherStatus.Wx[1].parameter.parameterName,
                                parameterValue:weatherStatus.Wx[1].parameter.parameterValue
                            },
                            {
                                startTime: weatherStatus.Wx[2].startTime,
                                endTime:weatherStatus.Wx[2].endTime,
                                parameterName:weatherStatus.Wx[2].parameter.parameterName,
                                parameterValue:weatherStatus.Wx[2].parameter.parameterValue
                            },
                        ]
                    },
                    {
                        elementName : "降雨機率",
                        time :[
                            {
                                parameterName:weatherStatus.PoP[0].parameter.parameterName, 
                            },
                            {
                                parameterName:weatherStatus.PoP[1].parameter.parameterName, 
                            },
                            {
                                parameterName:weatherStatus.PoP[2].parameter.parameterName, 
                            },
                        ]
                    },
                    {
                        elementName : "最低溫度",
                        time :[
                            {
                                parameterName:weatherStatus.MinT[0].parameter.parameterName, 
                            },
                            {
                                parameterName:weatherStatus.MinT[1].parameter.parameterName, 
                            },
                            {
                                parameterName:weatherStatus.MinT[2].parameter.parameterName, 
                            },
                        ]
                    },
                    {
                        elementName : "最高溫度",
                        time :[
                            {
                                parameterName:weatherStatus.MaxT[0].parameter.parameterName, 
                            },
                            {
                                parameterName:weatherStatus.MaxT[1].parameter.parameterName, 
                            },
                            {
                                parameterName:weatherStatus.MaxT[2].parameter.parameterName, 
                            },
                        ]

                    }
                ]
            }
        })
        
    }
    return(
        <div className = "marqee">
        <Weather_location/>
        </div>
    )

}

export default Weather;