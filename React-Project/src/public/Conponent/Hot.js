import React,{useState} from 'react';

const Hot = () =>{
    const [test,setTest] = useState(["a","b","c"]);
    return(
        <div>
            <p>{test[1]}</p>
        </div>
    )
}

export default Hot;