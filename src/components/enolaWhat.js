import React from "react";
import "../css/EnolaWhy.css";
import exclamation from "../assets/Exclamation.svg";

function enolaWhat() {
  return (
    <div className="enolaWhy">
      <div className="enolaWhy__top">
        <div className="enolaWhy__img">
          <img src={exclamation} alt="question mark" />
        </div>
        <div>
          <p className="enolaWhy__title">What do we bring to you?</p>
          <p className="enolaWhy__text">
            We created a fantastic app, ENOLA - complete utility platform.
            <br />
            An app with an evident and effortless user interface. The venue for
            video conferencing, class discussion, school notices, principal's
            talks. The app consists of a particular section loaded with relevant
            news articles, engaging and insightful infographics focused on
            improving student's knowledge of GK, history, and current affairs.
            <br /> <br />
            In addition, the app regularly updates the students's feed with
            upcoming competitive exams and scholarship tests. Allowing school
            admins to directly put circulars, school posts (holidays to timings
            change, etc.), sharig media varying from exam datasheets to festival
            wishes, etc.
            <br /> <br />
            Discussion groups in a forum type format alongside polling (to
            ensure no spamming) and surveying features to provide a complete
            learning and discussion platform alongside features like Video
            conferencing, Quizzes, assignments, to make it a complete learning
            environment. Many more features like academic calendars informing
            students of events during the academic year.
            <br /> <br />
            Student general request allows students to directly communicate
            their issues and requests directly to admin etc. making it the
            complete solution for schools with a super-simplified interface.
            <br />
            The app is competent in detecting the attentive presence of the
            students during the class, using the adcanced algorithms of AI Ml
            and IoT.
          </p>
        </div>
      </div>
      <div className="enola__border"/>
    </div>
  );
}

export default enolaWhat;
