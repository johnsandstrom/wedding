import React, { useState } from "react";
import { render } from "react-dom";
import './InfoBox.css';
//import { getContent } from "../pages/Home";
function InfoBox(props) {

  return (
    
      <div className="infobox">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
    </div>
  );
}

export default InfoBox;
