import React from "react";
import { About } from "../../components/About";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="about-wrapper">
        <About className="about-instance" />
      </div>
    </div>
  );
};
