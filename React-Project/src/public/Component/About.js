import React,{useEffect} from "react";
import Backbutton from "../Images/Backbutton.png";
import { useDispatch, useSelector } from "react-redux";
import {changeBackgroundColor2Blue} from "../Model/Action"; 
import "../Css/About.css";
const About = () =>{
    //小BUG，使用GOOGLE Chrome的上一頁不會換顏色
    const dispatch = useDispatch();
    return(
        <div className = "About-flex">
            <img className = "About-flex-backbutton" src={Backbutton} onClick={()=>{history.back();dispatch(changeBackgroundColor2Blue)}}/>
            <div className = "About-flex-title">About us</div>
            <div className = "About-flex-title-content">
                <p>現今社會在科技進步的情況下，相信大家已經很少去便利超商買報紙了吧!<br></br>
                大部分都是開電腦上網尋找網路新聞，但是往往新聞都是長篇大論，看都懶得看了吧!<br></br>
                於是我們為使用者設計出只要搜尋關鍵字，就能找出使用者搜尋的相關新聞。<br></br>
                並提共使用者既方便又可以快速閱讀新聞的介面~<br></br>
                團隊名單:蔡佳和、麥喬恩、陳建維、黃嘉祖</p>
            </div>
        </div>
    )
}

export default About;