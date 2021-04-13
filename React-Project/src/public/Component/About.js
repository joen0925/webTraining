import React,{useEffect} from "react";
import Backbutton from "../Images/Backbutton.png";
import "../Css/About.css";
const About = () =>{
    return(
        <div className = "About-flex">
            <img className = "About-flex-backbutton" src={Backbutton} onClick={()=>{history.back();}}/>
            <div className = "About-flex-title">About us</div>
            <div className = "About-flex-title-content">
                <p>現今社會在科技進步的情況下，相信大家已經很少去便利超商買報紙了吧!<br></br>
                大部分都是開電腦上網尋找網路新聞，但是往往新聞都是長篇大論，看都懶得看了吧!<br></br>
                於是我們為使用者設計出只要搜尋關鍵字，就能找出使用者搜尋的相關新聞。<br></br>
                並提共使用者既方便又可以快速閱讀新聞的介面~<br></br>
                前端:喬恩　美術:喬伊<br></br>
                啟發來源:大學專題</p>
            </div>
        </div>
    )
}

export default About;