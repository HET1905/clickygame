import React from "react";
import "./Header.css";

function Header(props){
    return(
      
        
            <div className="row" id="header">
                <div className="col-sm-4">
                    <h1>Clicky Game</h1>
                </div>
                <div className="col-sm-4">
                    <h2>Click on image to begin !</h2>
                </div>
                <div className="col-sm-4">
                    <div id="scroeDiv">
                        <p>
                            Score : <span>{props.score}</span> ||
                            Top Score: <span>{props.topScore}</span>
                        </p>
                    </div>
                </div>
                

            </div>
           
      
    );
}

export default Header;
