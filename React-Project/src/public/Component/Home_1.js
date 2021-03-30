import React,{useState} from 'react'

const Home_1 = (props) =>{
    const middle = {
        margin: "20% 30% 0%",
    }
    const [message,setMessage] = useState("");
    
    const changeDiv = () =>{
        props.setSubmited(true);
        props.setMessage(message);
    }
    return(
        <div style={middle} >
            <form  onSubmit={changeDiv} >
            <input type = "search" placeholder="請輸入訊息" onChange={(e) => {setMessage(e.target.value)}} value={message} style={{width: "100%",height: "30px"}}/>
            </form>
        </div>
    )
}

export default Home_1;