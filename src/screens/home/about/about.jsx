/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const About = ({ className }) => {
  return (
    <div className={`about ${className}`}>
      <div className="logo">
        <div className="overlap-group">
          <div className="text-wrapper">S</div>
        </div>
      </div>
      <div className="div">About</div>
      <img className="IMG" alt="Img" />
      <p className="enthusiastic-junior">
        Enthusiastic junior software developer with a national diploma from
        <br />
        Nelson Mandela University and six months of experience at Capaciti
        <br />
        upskilling. Proven track record of successfully contributing to diverse
        <br />
        projects, demonstrating strong problem-solving and teamwork skills.
        <br />
        Committed to continuous learning, staying updated on industry trends,
        <br />
        and expanding technical proficiency. Actively engaged in professional
        <br />
        networking and seeking opportunities to apply skills and knowledge in a<br />
        dynamic work environment. Strong communication and organizational
        <br />
        skills, coupled with a positive and persistent mindset. Eager to
        <br />
        contribute to impactful projects and bring value to a forward-thinking
        <br />
        organization.
      </p>
      <div className="overlap">
        <div className="text-wrapper-2">Download CV</div>
      </div>
      <div className="div-wrapper">
        <div className="text-wrapper-3">Hire</div>
      </div>
      <div className="overlap-2">
        <p className="current-ABSA">
          <span className="span">Current</span>
          <span className="text-wrapper-4">-ABSA(Younglings)</span>
        </p>
        <p className="matric">
          <span className="text-wrapper-4">Matric-</span>
          <span className="span">2016</span>
        </p>
        <div className="text-wrapper-5">Experience</div>
        <div className="text-wrapper-6">Education</div>
        <p className="ndip">
          <span className="text-wrapper-4">NDip-</span>
          <span className="span">2022</span>
        </p>
        <p className="element-uvuafrica">
          <span className="span">2023</span>
          <span className="text-wrapper-4">-UVUAfrica(Capatici)</span>
        </p>
      </div>
      <div className="nav-bar">
        <div className="overlap-3">
          <div className="bxs-home-svg">
            <div className="text-wrapper-7">H</div>
          </div>
          <div className="rectangle" />
          <img className="vector" alt="Vector" />
          <img className="img" alt="Vector" />
          <img className="vector-2" alt="Vector" />
          <img className="vector-3" alt="Vector" />
          <img className="vector-4" alt="Vector" />
          <div className="text-wrapper-8">P</div>
          <div className="text-wrapper-9">S</div>
          <div className="text-wrapper-10">C</div>
          <div className="rectangle-2" />
        </div>
      </div>
    </div>
  );
};
