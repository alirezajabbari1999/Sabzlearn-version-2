import React from "react";
import "./Breadcrumb.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";

export default function Breadcrumb({ links }) {
  return (
    <Container>
      <div className="Breadcrumb-container">
        <span className="Breadcrumb-icon-container">
          <HiHome className="Breadcrumb-icon" />
        </span>
        <ul>
          {links.map((link) => (
            <li>
              <Link to={link.to} className="Breadcrumb-link">
                {link.title}
              </Link>
              <IoIosArrowBack />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
