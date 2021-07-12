import React from "react";
import news from "../assets/News.svg";
import doughnut from "../assets/Doughnut Chart.svg";
import website from "../assets/Website.svg";
import "../css/EnolaInfo.css";

function enolaInfo() {
  return (
    <div className="enolaInfo">
      <div className="enolaInfo__top">
          <div>
            <img src={news} alt="news" />
            <p>News, Articles and updates</p>
            <span>Information about education</span>
          </div>
          <div>
            <img src={doughnut} alt="doughnut chart" />
            <p>Power of Infographics</p>
            <span>Combinig graphics with knowledge</span>
          </div>
          <div>
            <img src={website} alt="website" />
            <p>Your digital classroom</p>
            <span>The complete utility software</span>
          </div>
      </div>
      <div className="enolaInfo__bottom">
        This makes ENOLA a complete utility software for school management.
      </div>
    </div>
  );
}

export default enolaInfo;
