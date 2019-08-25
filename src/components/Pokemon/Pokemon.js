import React from "react";
import "./Pokemon.css";
// import data from  "friends.json";

function Pokemon(props){
    return(
           <div className="imgDiv">
             <img src={props.image} alt={props.name} onClick={props.imgClick}></img>
           </div>

    );
}

export default Pokemon;