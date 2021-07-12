import React from "react";
import "../css/About.css";

function about(props) {
  
  return (
    <div className="about" ref={props.refProp}>
      <div className="text">
        <p id="text_about">
          Our mission is to <b>transform</b> the quality of life using new and
          unique <b>technologies.</b>
        </p>
      </div>
    </div>
  );
}

export default about;
