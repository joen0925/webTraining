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
            citytemp = citytemp.map((citytemp)=><option key={citytemp.toString()}>{citytemp}</option>)
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
        </div>
    )

}

export default Weather;