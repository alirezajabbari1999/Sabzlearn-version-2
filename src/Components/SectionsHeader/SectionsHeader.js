// این کامپوننت مربوط به بخش تایتل و عنوان هر سکشن میباشد

import React from "react";
import "./SectionsHeader.css";
import { Link } from "react-router-dom";


import { FaArrowLeftLong } from "react-icons/fa6";

export default function SectionsHeader({ title, desc, btn,to }) {
  return (
    <div className="sections-header-container">
      <div className="right">
        <h3 className="sections-header-title">{title}</h3>
        {desc && <span className="sections-header-desc">{desc}</span>}
      </div>

      <div className="left">
        {btn && (
          <Link to={to} className="button">
            {btn}
            <FaArrowLeftLong className="arrow-icon" />
          </Link>
        )}
      </div>
    </div>
  );
}
