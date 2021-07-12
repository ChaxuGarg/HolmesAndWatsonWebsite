import React from "react";
import "../css/EnolaWhy.css";
import question from "../assets/Question.svg";

function enolaWhy() {
  return (
    <div className="enolaWhy">
      <div className="enolaWhy__top">
        <div>
          <p className="enolaWhy__title">Why are we here?</p>
          <p className="enolaWhy__text">
            The most challenging factor of difference among the students of
            cities and small towns is knowledge outside the book domain. Small
            town students lacked knowledge regarding the news, articles, and
            updates about various state-sponsored fellowships, private Talent
            hunt exams, and prestigious state-sponsored govt. exams like NTSE,
            KVPY, Olympiads. <br />
            <br />
            Spotted something even more disconcerting, 90 percent of the schools
            managing the curriculum, school notices and circulars, providing
            class notes, and conducting lectures using Whatsapp, Google
            Hangouts, and zoom calls, which are for sure the platforms to
            connect with the community but not for conducting academic sessions.
            <br />
            There didn't exist some solution that organizes the wholesome
            learning of school students in one place at the most reasonable
            cost.
            <br /> <br />
            Himanshu Goyal and Girjesh Singh, founded Holmes and Watson
            Technologies.
            <br /> An unrivaled wise duo of Sherlock Holmes and John Watson
            inspired the name of the company.
          </p>
        </div>
        <div  className="enolaWhy__img">
            <img src={question} alt="question mark" />
        </div>
      </div>
    </div>
  );
}

export default enolaWhy;
