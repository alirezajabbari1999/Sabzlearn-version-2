import React from "react";
import "./submenu.css";
import { Link } from "react-router-dom";

export default function Submenu({ items }) {
  return (
    <ul className="submenu">
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.link} className="submenu-item">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
