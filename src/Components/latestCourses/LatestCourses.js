//این کامپوننت مربوط به بخش جدیدترین دوره ها میباشد
import React, { useState } from "react";
import "./LatestCourses.css";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import { latestCoursesData } from "./../../Datas";
import Course from "../Course/Course";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function LatestCourses() {
  const [latestData, setLatestData] = useState(latestCoursesData);

  return (
    <Container>
      <div className="courses-container">
        <SectionsHeader
          title={"جدیدترین دوره ها"}
          desc={"سکوی پرتاب شما به سمت موفقیت"}
          btn={"تمامی دوره ها"}
          to={'/courses'}
        />

        <Row>
          {latestData.map((course) => (
            <Col key={course.id} xs={12} md={6} lg={4}>
              <Link className="courses-link" to='/course-info'>
                <Course key={course.id} {...course} />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
