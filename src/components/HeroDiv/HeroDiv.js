import React from "react";
import "./HeroDiv.css";

function HeroDiv() {
  return (
    <div id="heroDiv" className="text-center">
      <div id="textDiv">
        <h1>Clicky Game!</h1>
        <h2>
          Click on Image to get points, but don't click on image more than
          once!!
        </h2>
      </div>
    </div>
  );
}

export default HeroDiv;
