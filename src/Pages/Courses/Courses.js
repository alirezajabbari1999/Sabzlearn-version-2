import React, { useEffect, useState } from "react";
import "./Courses.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { allCourses } from "../../Datas";
import Course from "../../Components/Course/Course";

export default function Courses() {
  const [coursesData, setCoursesData] = useState(allCourses); // داده‌های دوره‌ها را بر اساس نوع مقدار categoryName نگهداری می‌کنیم

  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCourses, setVisibleCourses] = useState([]);
  const perPage = 9;

  const paginationNumbers = Math.ceil(coursesData.length / perPage);
  const paginatioNumbersArray = Array.from(Array(paginationNumbers).keys());

  useEffect(() => {
    const lastCourse = currentPage * perPage;
    const firstCourse = lastCourse - perPage;
    const visible = coursesData.slice(firstCourse, lastCourse);
    setVisibleCourses(visible);
  }, [coursesData, currentPage, perPage]);

  const changePagination = (num) => {
    setCurrentPage(num);
  };

  return (
    <>
      <Topbar />
      <Navbar />

      <Container>
        {/* مربوط به بخش نشانگر مسیر */}
        <Breadcrumb
          links={[
            { id: 1, title: "خانه", to: "/" },
            {
              id: 2,
              title: "تمام دوره ها",
              to: "/courses",
            },
          ]}
        />

        {/* مربوط به بخش رندر دوره ها */}
        <div className="all-courses-container">
          <Row>
            {visibleCourses.map((course, index) => (
              <Col key={index} xs={12} md={6} lg={4}>
                <Course {...course} />
              </Col>
            ))}
          </Row>
        </div>

        {/* pagination keys */}
        <nav aria-label="Page navigation example ">
          <ul class="pagination d-flex justify-content-center">
            {paginatioNumbersArray.map((number) => (
              <li
                class={`${
                  number + 1 === currentPage ? "btn-success" : ""
                } page-item btn m-1 mt-5 fs-5 border`}
                onClick={() => changePagination(number + 1)}
              >
                {number + 1}
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Footer />
    </>
  );
}
