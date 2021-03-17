import React,{useState, useEffect} from 'react';
const Weather = () =>{
    const [city,setCity] = useState([]);
    const url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314";
    let citytemp = [];

    useEffect(()=>{
        searchWeather();
    })
    const searchWeather = () =>{
        fetch(url)
        .then(res => {
        return res.json();
        }).then(result => {
            var location = result.records.location;
            for(let i = 0; i < location.length ; i++){
                citytemp.push(result.records.location[i].locationName);
            }
            citytemp = citytemp.map((citytemp)=><option key={citytemp.toString()}>{citytemp}</option>)
            setCity(citytemp);
        })
    }
    return(
        <div>
            <h3>天氣預報</h3>
            <select>
                <option value="">請選擇你要看的縣市</option>
                {city}
            </select>
        </div>
    )

}

export default Weather;