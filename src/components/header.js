import React from "react";
import "../css/Header.css";

function header(props) {
  return (
    <div className="header">
      <h1 className="header__title" onClick={props.about}>Holmes and Watson Technologies</h1>
      <div className="header__right">
        <p onClick={props.about}>About</p>
        <p onClick={props.enola}>ENOLA</p>
        <p onClick={props.story}>Our Story</p>
        <p onClick={props.team}>Team</p>
        <p onClick={props.contact}>Contact</p>
      </div>
    </div>
  );
}

export default header;
