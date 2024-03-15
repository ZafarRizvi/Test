import React from "react";
import "./card.css";

const card = (props) => {
  return (
    <div className="main-cont">
      <div className="card">
        <div className="card-header">
          <h1>{props.title}</h1>
        </div>
        <div className="card-body">
          <p>{props.description}</p>
        </div>
        <div className="card-footer">
          <button>{props.btn}</button>
        </div>
      </div>
    </div>
  );
};

export default card;
