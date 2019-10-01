import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="container-fluid">

    
    <div className="row" id="header">
      <div className="col-sm-4">
        <h1>Clicky Game</h1>
      </div>
      <div className="col-sm-4">
        <h2 id="resultH2" className={props.h2Color}>
          {props.h2Text}
        </h2>
      </div>
      <div className="col-sm-4">
        <div id="scroeDiv">
          <p>
            Score : <span>{props.score}</span> || Top Score:{" "}
            <span>{props.topScore}</span>
          </p>
          <button
            className="btn btn-primary btnRestart"
            onClick={props.gameRestart}
          >
            Restart Game
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Header;
