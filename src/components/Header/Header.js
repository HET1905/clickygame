import React from "react";
import "./Header.css";

function Header(){
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
                            Score : <span>0</span> ||
                            Top Score: <span>10</span>
                        </p>
                    </div>
                </div>
                

            </div>
           
      
    );
}

export default Header;
