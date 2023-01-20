import React from "react";
import "./AboutHero.css";
import about from "../../data/AboutpageData/abt-grp.png";
import ellipse from "../../data/AboutpageData/ellipse.png";
import meeting from "../../data/HomepageData/meeting.png";
import star from "../../data/HomepageData/star4.png";

export default function AboutHero() {
  return (
    <div>
      <div className="abouthero-container-outer">
        <div className="abouthero-container">
          <div className="abouthero-texts">
            <p className="about-hero-title">About Klnwash</p>
            <p className="abouthero-content">
              Klnwash, a solution created exclusively for the pickup and
              delivery of laundry, is now available. The need for the service is
              particularly significant among the working class and young people
              who are time-constrained. We are a self-managed network built to
              comprehend client wants and work in tandem with numerous laundry
              businesses to satisfy these needs.
            </p>
            <button>Get Klnwash</button>
          </div>
          <div className="abouthero-img">
            <img className="abt-hero-img" src={about} alt="illustration" />
            <img className="abt-hero-ellipse" src={ellipse} alt="ellipse" />
          </div>
        </div>
      </div>

      <div className="about-proper-container-outer">
        <div className="about-proper">
          <p className="about-proper-header">WE’RE HERE BECAUSE OF YOU</p>
          <div className="underline about-proper-U"></div>
          <div className="about-proper-container">
            <div className=" about-proper-img">
              <img
                className="about-proper-meeting"
                src={meeting}
                alt="illustration"
              />
              <img className="about-proper-star" src={star} alt="star" />
            </div>
            <div className="about-texts" data-aos="fade-left" data-aos-duration="1500">
              <p className="about-text-header">WHO WE ARE</p>
              <div className="underline"></div>
              <p className="about-text-main">
                Kln Wash is a regular home pick-up and delivery service will be
                offered by the business. The business will have a facility for
                its activities. 7 days a week, there is on-demand pickup and
                delivery. Easy scheduling, saves time and money. Delivery and
                pick-up are superbly executed to generate that Kln Wash client
                experience. revolutionize the laundry industry. With only a few
                simple steps, you can set pickup and dropoff times and arrive at
                the appointed hour. We enjoy assisting you in getting your
                clothes clean and fresh, therefore we are available to you
                around-the-clock for any questions, issues, or recommendations.
                Are you looking for a laundry service that will pick up and
                deliver your clean, ready-to-wear clothes? If so, arrange for
                Kln Wash to pick up your first item right away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
