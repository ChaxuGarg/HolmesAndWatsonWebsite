import React from "react";
import "../css/Team.css";
import himanshu from '../assets/Himanshu.jpg';
import girjesh from '../assets/Girjesh.jpg';

function team(props) {
  return (
    <div className="team" ref={props.refProp}>
      <div className="team__title">
        <span>Team</span>
      </div>
      <div className="team__icons">
        <div>
          <img alt="Himanshu Goyal" src={himanshu} />
          <p className="team__text"><b>Himanshu Goyal</b></p>
          <p className="team__info">Cofounder,<br /> Chief Executive Officer</p>
        </div>
        <div>
          <img alt="Girjesh Singh" src={girjesh} />
          <p className="team__text"><b>Girjesh Singh</b></p>
          <p className="team__info">Cofounder,<br /> Chief Design Officer</p>
        </div>
      </div>
    </div>
  );
}

export default team;
