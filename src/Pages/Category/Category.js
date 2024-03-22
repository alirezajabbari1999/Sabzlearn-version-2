import React, { useState, useEffect } from "react";
import "./Category.css";
import { RxGrid } from "react-icons/rx";
import { RxTextAlignLeft } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  frontendCoursesData,
  securityCoursesData,
  pythonCoursesData,
} from "../../Datas";
import Course from "./../../Components/Course/Course";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

export default function Category() {
  const { categoryName } = useParams(); // دریافت مقدار categoryName از URL
  const [coursesData, setCoursesData] = useState([]); // داده‌های دوره‌ها را بر اساس نوع مقدار categoryName نگهداری می‌کنیم

  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCourses, setVisibleCourses] = useState([]);
  const perPage = 3;

  const paginationNumbers = Math.ceil(coursesData.length / perPage);
  const paginatioNumbersArray = Array.from(Array(paginationNumbers).keys());

  useEffect(() => {
    if (categoryName === "frontend") {
      setCoursesData(frontendCoursesData);
    } else if (categoryName === "security") {
      setCoursesData(securityCoursesData);
    } else if (categoryName === "python") {
      setCoursesData(pythonCoursesData);
    }
  }, [categoryName]);

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
        <div className="category-section-topbar">
          <div className="right">
            <span className="icon1">
              <RxGrid />
            </span>
            <span className="icon2">
              <RxTextAlignLeft />
            </span>

            <div className="select-box-container">
              <select>
                <option value="custom">مرتب سازی پیش فرض</option>
                <option value="popularity">مرتب سازی بر اساس محبوبیت</option>
                <option value="score">مرتب سازی بر اساس امتیاز</option>
                <option value="last">مرتب سازی بر اساس آخرین</option>
                <option value="Inexpensive">
                  مرتب سازی بر اساس ارزان ترین
                </option>
                <option value="expensive">مرتب سازی بر اساس گران ترین</option>
              </select>
            </div>
          </div>

          <div className="left">
            <div className="search-box">
              <input type="text" placeholder="جستجوی دوره..." />
              <button className="search-btn">
                <IoSearch className="search-icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="category-section-courses">
          <Row>
            {visibleCourses.map((course) => (
              <Col key={course.id} xs={12} md={6} lg={4}>
                <Link to="/course-info"  className="courses-link">
                  <Course {...course} />
                </Link>
              </Col>
            ))}
          </Row>
        </div>

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
