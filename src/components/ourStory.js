import React from "react";
import "../css/OurStory.css";
import desk from "../assets/Happy Bunch Desk.svg";
import earth from "../assets/Hands Earth.svg";
import message from "../assets/Message Notification.svg";
import teamwork from "../assets/Dayflow Teamwork.svg";

function ourStory(props) {
  return (
    <div className="ourStory" ref={props.refProp}>
      <div className="ourStory__container">
        <div className="ourStory__content">
          <p className="ourStory__title">Our Story</p>
          <p className="ourStory__text">
            You visited one app to watch lectures and others to collect
            Unsystematic school announcements and catch relevant news articles
            and incredible facts. Ah wait, visiting portals regularly to don't
            miss updates of that exam you started preparing recently?
          </p>
        </div>
        <div className="ourStory__img">
          <img src={desk} alt="Desk" style={{maxWidth: "380px"}}/>
        </div>
      </div>
      <div className="ourStory__container">
        <div className="ourStory__img">
          <img src={earth} alt="Earth" style={{maxWidth: "500px"}}/>
        </div>
        <div className="ourStory__content">
          <p className="ourStory__text">
            When the situation across the globe demanded a badass transformation
            in education platforms to cater to the needs adequately, I began to
            observe.
            <br />
            Only the country's top 1% of private schools can afford the
            subscription of sophisticated apps to facilitate online learning.
            Nevertheless, mention the complexity and non-affordability of these
            apps entirely deteriorates their utility.
          </p>
        </div>
      </div>
      <div className="ourStory__container">
        <div className="ourStory__content">
          <p className="ourStory__text">
            We surveyed rigourously and found something disconcerting, 90
            percent of the school community using Whatsapp, zoom calls,
            systematically so unorganized. I could not find a one-fir app that
            pitches it perfectly.
          </p>
        </div>
        <div className="ourStory__img">
          <img src={message} alt="Notification" style={{maxWidth: "420px"}}/>
        </div>
      </div>
      <div className="ourStory__container">
        <div className="ourStory__img">
          <img src={teamwork} alt="Teamwork" style={{maxWidth: "550px"}}/>
        </div>
        <div className="ourStory__content">
          <p className="ourStory__text">
            We founded Holmes and Watson Technologies. The vision of our company
            is to provide tech-based solutions to real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ourStory;
