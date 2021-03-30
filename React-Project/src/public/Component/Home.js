import React, {useState} from "react";
import Home_1 from "./Home_1";
import Home_2 from "./Home_2";
const Home = () =>{
    const [submited,setSubmited] = useState(false);
    const [message,setMessage] = useState("");

    return submited ? <Home_2 message={message}/> : <Home_1 setSubmited={setSubmited} setMessage={setMessage}/>;
}

export default Home;