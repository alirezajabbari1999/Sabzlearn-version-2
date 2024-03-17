import React from "react";
import "./AboutUsBox.css";


export default function AboutUsBox({icon,title,desc}) {
  return (
    <div className="about-us-box-container">
      <div className="right">
        {icon}
      </div>
      <div className="left">
        <span className="title">{title}</span>
        <span className="desc">{desc}</span>
      </div>
    </div>
  );
}
