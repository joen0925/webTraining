import React,{useState} from 'react';
import "../../Css/Home.css";
const Home_1 = (props) =>{
    //{viewFocus ? <p>熱搜太魯閣號布偶貓Switch統神端火鍋</p>:<p></p>}
    const [message,setMessage] = useState("");
    const [viewFocus,setViewFocus] = useState("");
    const changeDiv = () =>{
        props.setSubmited(true);
        props.setMessage(message);
    }
    const change2False = () =>{
        setViewFocus(false);
    }
    const change2True = () =>{
        setViewFocus(true);
    }
    return(
        <div className = "middle">
            <form  onSubmit={changeDiv}>
                <input type = "search" placeholder="THE NEWS" onChange={(e) => {setMessage(e.target.value)}} onBlur={change2False} onFocus={change2True} value={message} style={{borderColor:"#50aadb",backgroundColor:"#50aadb"}}/>                
            </form>
            <div>
            {viewFocus ? <p>熱搜:  太魯閣號  布偶貓  Switch  統神端火鍋</p>:<p></p>}
            </div>            
        </div>
    )
}

export default Home_1;