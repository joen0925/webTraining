import React,{useState} from 'react'

const Test = (props) =>{
    const [message,setMessage] = useState("");
    
    const changeDiv = () =>{
        props.setSubmited(true);
        props.setMessage(message);
    }
    return(
        <div>
            <form className="Homepage" onSubmit={changeDiv}>
            <input type = "text" placeholder="請輸入訊息" onChange={(e) => {setMessage(e.target.value)}} value={message}/>
            <input name = "submit" type = "submit"/>
            </form>
        </div>
    )
}

export default Test;