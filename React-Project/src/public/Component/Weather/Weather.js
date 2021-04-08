import React,{useState, useEffect, useRef} from 'react';
import styles from "../../Css/Weather.css";
import Weather_icon from "./Weather_icon";
import WeatherCount from "./WeatherCount";
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
<<<<<<< HEAD:React-Project/src/public/Conponent/Weather.js
        fetch(url)
        .then(res => {
        return res.json();
        }).then(result => {
<<<<<<< HEAD
            var location = result.records.location;
            var weatherStatus = result.records.location[0].weatherElement;
            for(let i = 0; i < location.length ; i++){
                citytemp.push(result.records.location[i].locationName);               
            }
            citytemp = citytemp.map((citytemp)=><option key={citytemp.toString()}>{citytemp}</option>)
            setCity(citytemp);
=======
            const locationdata = result.records.location[0];
=======
        return fetch(url)
        .then((res) => res.json())
        .then(result => {
            const locationdata = result.records.location[locationTarget];
>>>>>>> Select_Test:React-Project/src/public/Component/Weather/Weather.js
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
<<<<<<< HEAD:React-Project/src/public/Conponent/Weather.js
            })
>>>>>>> Select_Test
=======
            }
>>>>>>> Select_Test:React-Project/src/public/Component/Weather/Weather.js
        })
        
    }
    return(
<<<<<<< HEAD
        <div>
            <h3>36小時天氣預報</h3>
            <select >
               <option>嘉義縣</option>
               <option>新北市</option>
               <option>嘉義市</option>
               <option>新竹縣</option>
               <option>新竹市</option>
               <option>臺北市</option>
               <option>臺南市</option>
               <option>宜蘭縣</option>
               <option>苗栗縣</option>
               <option>雲林縣</option>
               <option>花蓮縣</option>
               <option>臺中市</option>
               <option>臺東縣</option>
               <option>桃園市</option>
               <option>南投縣</option>
               <option>高雄市</option>
               <option>金門縣</option>
               <option>屏東縣</option>
               <option>基隆市</option>
               <option>澎湖縣</option>
               <option>彰化縣</option>
               <option>連江縣</option>
            </select>
=======
        <div className = {styles.main}>
        <h3 style = {{textAlign:"center"}}>36小時天氣預報</h3>
        <div className = {styles.flex} id = "地點">
        <div className = {styles.locationName}><Weather_location setLocationTarget= {setLocationTarget}/></div>
        <WeatherCount setCount = {setCount} count = {count}/>
        </div>
        <div className = {styles.weatherflex} id = "天氣現象和時間">
            <div className = {styles.weather_1}>{data.weatherElement[0].time[count].parameterName}</div>
            <div className = {styles.weather_2}>開始時間:{data.weatherElement[0].time[count].startTime}</div>
            <div className = {styles.weather_3}>結束時間:{data.weatherElement[0].time[count].endTime}</div>
        </div>
        <div className = {styles.Tempflex_1} id = "溫度">
            <div className = {styles.Tempflex_2}>
                <div>最高溫{data.weatherElement[3].time[count].parameterName}°C</div>
                <div>最低溫{data.weatherElement[2].time[count].parameterName}°C</div>
            </div>
            <div className = {styles.Tempitem_1}>
                <Weather_icon parameterValue={data.weatherElement[0].time[count].parameterValue}/>
                {console.log(data.weatherElement[0].time[count].parameterValue)}
            </div>
        </div>
        <div className = {styles.Rainflex} id="降雨機率">降雨{data.weatherElement[1].time[0].parameterName}%</div>
>>>>>>> Select_Test
        </div>
    )

}

export default Weather;