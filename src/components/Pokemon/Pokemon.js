import React from "react";
import "./Pokemon.css";

function Pokemon(props) {
  return (
    <div className="imgDiv">
      <img
        src={props.image}
        alt={props.name}
        onClick={() => props.imgClick(props.id)}
      ></img>
    </div>
  );
}

export default Pokemon;
