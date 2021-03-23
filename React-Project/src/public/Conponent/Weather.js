import React,{useState, useEffect, useRef} from 'react';
import styles from "../Css/Weather.css"
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
                    },
                    {
                        startTime: "",
                        endTime:"",
                        parameterName:"",
                    },
                    {
                        startTime: "",
                        endTime:"",
                        parameterName:"",
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
                if(["Wx","PoP","MinT","MaxT"].includes(currentValue.elementName)){
                    accumulator[currentValue.elementName] = currentValue.time;
                }
                return accumulator;
            },{});
            console.log("fetch區塊:" + locationdata.locationName);
            console.log("fetch區塊:" + weatherStatus.Wx[1].parameter.parameterName,);
            setData({
                locationName: locationdata.locationName,
                weatherElement:[
                    {
                        elementName : "天氣現象",
                        time :[
                            {
                                startTime: weatherStatus.Wx[0].startTime,
                                endTime:weatherStatus.Wx[0].endTime,
                                parameterName:weatherStatus.Wx[0].parameter.parameterName,
                            },
                            {
                                startTime: weatherStatus.Wx[1].startTime,
                                endTime:weatherStatus.Wx[1].endTime,
                                parameterName:weatherStatus.Wx[1].parameter.parameterName,
                            },
                            {
                                startTime: weatherStatus.Wx[2].startTime,
                                endTime:weatherStatus.Wx[2].endTime,
                                parameterName:weatherStatus.Wx[2].parameter.parameterName,
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
        <div className = {styles.main}>
        <h3 style = {{textAlign:"center"}}>36小時天氣預報</h3>
        <div className = {styles.flex} id = "地點">
            <div className = {styles.locationName}>{data.locationName}</div>
        </div>
        <div className = {styles.weatherflex} id = "天氣現象和時間">
            <div className = {styles.weather_1}>{data.weatherElement[0].time[0].parameterName}</div>
            <div className = {styles.weather_2}>開始時間:{data.weatherElement[0].time[0].startTime}</div>
            <div className = {styles.weather_3}>結束時間:{data.weatherElement[0].time[0].endTime}</div>
        </div>
        <div className = {styles.Tempflex_1} id = "溫度">
            <div className = {styles.Tempflex_2}>
                <div>最高溫{data.weatherElement[3].time[0].parameterName}°C</div>
                <div>最低溫{data.weatherElement[2].time[0].parameterName}°C</div>
            </div>
            <div className = {styles.Tempitem_1}>
                圖片
            </div>
        </div>
        <div className = {styles.Rainflex} id="降雨機率">降雨{data.weatherElement[1].time[0].parameterName}%</div>
        </div>
    )

}

export default Weather;