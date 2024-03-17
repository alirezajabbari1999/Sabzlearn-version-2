import React from "react";
import "./Article.css";
import { indexArticlesSectionDatas } from "./../../Datas";
import { Container, Row, Col } from "react-bootstrap";

import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { FaSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionsHeader from "../SectionsHeader/SectionsHeader";

export default function Article() {
  return (

      <Container>
        <div className="article-container">

        <SectionsHeader
          title={"جدیدترین مقاله ها"}
          desc={"پیش به سوی ارتقای دانش"}
          btn={"تمامی مقاله ها"}
        />
        <Row>
          {indexArticlesSectionDatas.map((article) => (
            <Col className="article-section-col" xs={12} sm={6} md={6} lg={3}>
              <div className="article-card">
                <div className="image-box">
                  <img src={article.image} alt="#" />
                </div>

                <div className="desc-box">
                  <h4>{article.title}</h4>
                  <p>{article.desc}</p>
                  <div className="date-box">
                    <span className="teacher-name">
                      <CiUser size={16} />
                      {article.teacher}
                    </span>
                    <span className="date">
                      <CiCalendar size={16} />
                      {article.date}
                    </span>
                  </div>

                  <div className="article-link">
                    <Link className="link-btn" to="/">
                      <span>مطالعه مقاله</span>
                      <BsArrowLeftCircleFill className="arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        </div>
      </Container>
  );
}
