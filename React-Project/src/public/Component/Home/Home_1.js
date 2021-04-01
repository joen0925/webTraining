import React,{useState} from 'react'
import Weather from "../Weather/Weather";
const Home_1 = (props) =>{
    const middle = {
        margin: "20% 30% 0%",
        border: "2px pink solid"
    }
    const weatherFlex ={
        display : "flex",
	    flexDirection: "row",
	    flexWrap: "nowrap",
        justifyContent: "center",
        border : "3px black solid"
    }
    const weatherItem ={
        
    }
    const [message,setMessage] = useState("");
    
    const changeDiv = () =>{
        props.setSubmited(true);
        props.setMessage(message);
    }
    return(
        <div style={middle} >
            <form  onSubmit={changeDiv} >
            <input type = "search" placeholder="查詢新聞" onChange={(e) => {setMessage(e.target.value)}} value={message} style={{width: "100%",height: "30px"}}/>
            </form>
        </div>
    )
}

export default Home_1;