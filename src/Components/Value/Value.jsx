import React from "react";
import "./Value.css";
import eye from "../../data/AboutpageData/eye.png";
import receipt from "../../data/AboutpageData/receipt.png";
import founder1 from "../../data/AboutpageData/founder1.png";
import founder2 from "../../data/AboutpageData/founder2.png";

export default function Value() {
  return (
    <div className="value-container-outer">
      <div className="value-container">
        <p className="value-header">OUR UNIQUE VALUE</p>
        <div className="underline value-U"></div>
        <div className="value-goals">
          <div className="value-goal" data-aos="fade-right" data-aos-duration="1500">
            <div className="goal-icon">
              <img src={receipt} alt="receipt" />
            </div>
            <p className="value-mission-title">Our Mission</p>
            <p className="value-mission">
              Our mission is to improve the lives of the clients we serve and
              bring convenience to them by offering the best laundry service in
              the industry.
            </p>
          </div>

          <div className="value-goal" data-aos="fade-left" data-aos-duration="1500">
            <div className="goal-icon">
              <img src={eye} alt="eye logo" />
            </div>
            <p className="value-mission-title">Our Vision</p>
            <p className="value-mission">
              To lead the laundry service sector in Africa and become the go-to
              company for laundry services by relentlessly pursuing excellence
              in everything we do. We will continue to be regarded for our moral
              codes, admired for our ideas, honored for our professionalism, and
              recognized for our achievements.
            </p>
          </div>
        </div>

        <p className="founder-header">MEET OUR FOUNDERS</p>
        <div className="underline founder-U"></div>
        <div className="founders">
          <div className="founder" data-aos="fade-up" data-aos-duration="1500">
            <img className="founder-img" src={founder1} alt="founder" />
            <p className="founder-name">Edem Victor</p>
            <p className="founder-position">CO-FOUNDER & CEO</p>
          </div>

          <div className="founder" data-aos="fade-up" data-aos-duration="1500">
            <img className="founder-img" src={founder2} alt="founder" />
            <p className="founder-name">Jessica Ruth</p>
            <p className="founder-position">CO-FOUNDER & CTO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
