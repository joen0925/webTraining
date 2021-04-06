import React from "react";

const Home_3 = (props) =>{
    //<input type = "search" placeholder="THE NEWS" style={{borderColor:"#50aadb",backgroundColor:"#50aadb"}} onblur={props.setText(false)}/>
    const change2False= () =>{
        setText(false);
    }
    return(
        <div>
            <input type = "search" placeholder="THE NEWS" style={{borderColor:"#50aadb",backgroundColor:"#50aadb"}} onBlur={props.setText(false)} />
        </div>
    )
}

export default Home_3;