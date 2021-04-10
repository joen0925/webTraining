import React,{useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {changeBackgroundColor2LightBlue,changeBackgroundColor2Blue} from "../../Model/Action";
import Home_footer from "./Home_footer"
import "../../Css/Home.css";
const Home_1 = (props) =>{
    
    const [message,setMessage] = useState("");
    const [viewFocus,setViewFocus] = useState("");
    const dispatch = useDispatch();
    const changeDiv = () =>{
        props.setSubmited(true);
        props.setMessage(message);
    }
    const change2False = () =>{
        setViewFocus(false);
        dispatch(changeBackgroundColor2Blue);
    }
    const change2True = () =>{
        setViewFocus(true);
        dispatch(changeBackgroundColor2LightBlue);
    }
    return(
        <div className = "content-flex">
            <div className = { viewFocus ? "middleFocus" : "middle"}>
                <form  onSubmit={changeDiv}>
                    <input type = "search" placeholder="THE NEWS" onChange={(e) => {setMessage(e.target.value)}} onBlur={change2False} onFocus={change2True} value={message} />
                </form>
                <div>
                {viewFocus ? <p>熱搜:  太魯閣號  布偶貓  Switch  統神端火鍋</p>:<p></p>}
                </div>                       
            </div>
             
            { viewFocus ? <div></div> : <Home_footer/>}
        </div>
        
           
        
    )
}

export default Home_1;