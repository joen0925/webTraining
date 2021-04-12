import React,{useState,useEffect} from "react";
import Weather_icon from "./Weather_icon";
import "../../Css/Weather-location.css";
const Weather_location = (props) => {
    const [location, setLocation] = useState([]);
    
    const url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314";
    useEffect(()=>{
        search();
    },[]);
    const search = () =>{
        fetch(url)
        .then((res) => res.json())
        .then(result => {
            let locationtemp = [];
            const locationItem = result.records.location;
            for (var i = 0; i < locationItem.length; i++){
                locationtemp.push(<div key ={"跑馬燈"+i} className="marqee-flex">
                    <div className="marqee-flex-div1">{locationItem[i].weatherElement[4].time[0].parameter.parameterName}<Weather_icon parameterValue={locationItem[i].weatherElement[0].time[0].parameter.parameterValue}/>C</div>
                    <div className="li-flex">
                    <li key ={i}>{locationItem[i].locationName}</li>
                    <div key ={"降雨機率" + i}>降雨機率  {locationItem[i].weatherElement[1].time[0].parameter.parameterName}%</div>
                    </div>
                </div>);
            }
            setLocation(locationtemp);
        })
    }
    return(
        <div>
            <ul>
                {location}
            </ul>
        </div>
    )
}

export default Weather_location;