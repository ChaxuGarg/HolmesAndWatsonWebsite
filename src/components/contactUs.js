import React from "react";
import "../css/ContactUs.css";
import { SocialIcon } from "react-social-icons";

function contactUs(props) {
  return (
    <div className="contactUs" ref={props.refProp}>
      <div className="contactUs__follow">
        Follow us on: 
      </div>
      <div className="contactUs__bottom">
        <div className="contactUs__left">
          <p className="contactUs__more">More</p>
          <p onClick={props.about}>About</p>
          <p onClick={props.enola}>ENOLA</p>
          <p onClick={props.story}>Our Story</p>
        </div>
        <div className="contactUs__right">Contact us:</div>
      </div>
    </div>
  );
}

export default contactUs;
