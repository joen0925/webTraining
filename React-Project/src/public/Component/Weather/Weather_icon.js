import React,{useEffect,useState} from "react";
import Thunderstorm from "../../Images/Thunderstorm.svg";
import Clear from "../../Images/Clear.svg";
import CloudyFog from "../../Images/CloudyFog.svg";
import Cloudy from "../../Images/Cloudy.svg";
import Fog from "../../Images/Fog.svg";
import PartiallyClearWithRain from "../../Images/PartiallyClearWithRain.svg";
import Snowing from "../../Images/Snowing.svg";
import MostCloudy from "../../Images/MostCloudy.svg";
import MostCloudyRain from "../../Images/MostCloudyRain.svg";

const Weather_icon = (props) =>{
    const [icon, setIcon] = useState(0);
    useEffect(()=>{
      setIcon(findWeatherType(props.parameterValue));
    });
    const weatherTypes = {
        Thunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
        Clear: [1],
        CloudyFog: [25, 26, 27, 28],
        Cloudy: [2, 3, 4, 5, 7],
        MostCloudy:[6],
        MostCloudyRain:[10, 12, 13],
        Fog: [24],
        PartiallyClearWithRain: [
          8, 9, 11,
          14, 19, 20, 29, 30,
          31, 32, 38, 39,
        ],
        Snowing: [23, 37, 42],
      };
      const weatherIcons = {
          Thunderstorm: <img src ={Thunderstorm} style ={{height: "30px",marginBottom: "50px" }}></img>,
          Clear: <img src ={Clear} style ={{height: "30px",marginBottom: "50px"  }}></img>,
          CloudyFog: <img src ={CloudyFog} style ={{height: "30px",marginBottom: "50px"  }}></img>,
          Cloudy: <img src ={Cloudy} style ={{height: "30px",marginBottom: "50px"  }}></img>,
          Fog: <img src ={Fog} style ={{height: "30px",marginBottom: "50px"  }}></img>,
          MostCloudy:<img src ={MostCloudy} style ={{height: "30px",marginBottom: "50px"  }}></img>,
          MostCloudyRain:<img src ={MostCloudyRain} style ={{height: "30px" ,marginBottom: "50px" }}></img>,
          PartiallyClearWithRain: <img src ={PartiallyClearWithRain} style ={{height: "30px",marginBottom: "50px"  }}></img>,
          Snowing: <img src ={Snowing} style ={{height: "30px",marginBottom: "50px"  }}></img>,
      };
      const findWeatherType = (weatherCode) => {
        const [weatherType] =
          Object.entries(weatherTypes).find(([weatherType, weatherCodes]) =>
            weatherCodes.includes(Number(weatherCode))
          ) || [];
        return weatherType;
      };
    return(
        <div>
           {weatherIcons[icon]}
        </div>        
    );
}

export default Weather_icon;