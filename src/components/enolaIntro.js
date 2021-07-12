import React from "react";
import "../css/EnolaIntro.css";
import brain from "../assets/Brain.svg";

function enolaIntro() {
  return (
    <div className="enolaIntro">
      <div className="enola__top">
        <div className="enola__left">
            <p><b>E</b>ducation</p>
            <p><b>N</b>etworking</p>
            <p><b>O</b>ptimization</p>
            <p><b>L</b>earning with</p>
            <p><b>A</b>rtificial Intelligence</p>
        </div>
        <div className="enola__right">
            <img src={brain} alt="brain" />
            <p>A place for education</p>
        </div>
      </div>
      <div className="enola__bottom">
          We employ the Art of AI & the Magic of ML to buid the software that aids in Educational Networking and Optimization of learning.
      </div>
    </div>
  );
}

export default enolaIntro;