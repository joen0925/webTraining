import React, {useState, useEffect} from "react";
import Test from "./Home_1";
import Test2 from "./Home_2";
const Home = () =>{
    const [submited,setSubmited] = useState(false);
    const [message,setMessage] = useState("");

    return submited ? <Test2 message={message}/> : <Test setSubmited={setSubmited} setMessage={setMessage}/>;
}

export default Home;