// این کامپوننت مربوط به بخش تایتا و عنوان هر سکشن میباشد

import React from "react";
import "./SectionsHeader.css";

import { FaArrowLeftLong } from "react-icons/fa6";

export default function SectionsHeader({ title, desc, btn }) {
  return (
    <div className="sections-header-container">
      <div className="right">
        <h3 className="sections-header-title">{title}</h3>
        {desc && <span className="sections-header-desc">{desc}</span>}
      </div>

      <div className="left">
        {btn && (
          <button>
            {btn}
            <FaArrowLeftLong className="arrow-icon" />
          </button>
        )}
      </div>
    </div>
  );
}
