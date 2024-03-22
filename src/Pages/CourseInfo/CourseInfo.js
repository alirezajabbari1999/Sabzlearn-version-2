import React from "react";
import "./CourseInfo.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import { SiTelegram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaRegComments } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi";
import { FaChartLine } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import AboutUsBox from "../../Components/AboutUsBox/AboutUsBox";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import jsTakhasosiProject from "./../../images/project-takhasosi-js.webp";
import motekhasesNodeJs from "./../../images/motekhasses-nodejs.webp";
import motekhasesJango from "./../../images/motekhasses-jango.webp";
import articleImg1 from "./../../images/20-js-library.webp";
import articleImg2 from "./../../images/shoro-front.webp";
import teacherImg from "./../../images/teacher.jpg";
import SectionsHeader from "./../../Components/SectionsHeader/SectionsHeader";
import Accordion from "react-bootstrap/Accordion";

import video1 from "./../../video/1.mp4";

export default function CourseInfo() {
  return (
    <>
      <Topbar />
      <Navbar />

      <Container>
        {/* بخش نمایش مسیری صفحه ای که توش هستیم */}
        <Breadcrumb
          links={[
            { id: 1, title: "خانه", to: "/" },
            {
              id: 2,
              title: "آموزش برنامه نویسی فرانت اند",
              to: "/category-info/frontend",
            },
            {
              id: 3,
              title: "دوره متخصص جاوااسکریپت",
              to: "/course-info/js-expert",
            },
          ]}
        />

        {/* بخش مربوط به ویدیو */}
        <div className="course-info-video-section">
          <Row>
            <Col xs={12} md={6}>
              <div className="right-side">
                <span className="course-info-badge">
                  آموزش برنامه نویسی فرانت اند
                </span>
                <h2 className="course-info-title">
                  آموزش 20 کتابخانه جاوااسکریپت برای بازار کار
                </h2>
                <p className="course-info-desc">
                  ‌کتابخانه‌ها باعث افزایش سرعت کدنویسی میشن. در حدی که تو بازار
                  کار هم از کتابخانه های مختلفی برای توسعه پروژه‌ها استفاده
                  میشه. تو این دوره 20 کتابخانه پرکاربرد و پراستفاده ری‌اکت که
                  تو بازار کار برای توسعه پروژه های مختلفی استفاده میشه رو...
                </p>

                <div className="social-icons">
                  <a href="https://t.me/alirerza_j/" target="_blank">
                    <SiTelegram />
                  </a>
                  <a
                    href="https://www.instagram.com/alirzamm_/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                  <a href="">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6}>
              <div className="left-side">
                <div className="video-container">
                  <video controls>
                    <source src={video1} type="video/mp4" />
                    مرورگر شما از ویدیو پشتیبانی نمی‌کند.
                  </video>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="courses-details">
          <Row>
            <Col md={8}>
              <div className="right-side">

                {/* بخش مربوط به باکس های اطلاعات دوره */}
                <div className="course-infos">
                  <Row>
                    <Col md={4}>
                      <AboutUsBox
                        title={"وضعیت دوره:"}
                        desc={"به اتمام رسیده"}
                        icon={<IoIosSchool className="course-info-icon" />}
                      />
                    </Col>
                    <Col md={4}>
                      <AboutUsBox
                        title={"مدت زمان دوره:"}
                        desc={"19 ساعت"}
                        icon={<FaClock className="course-info-icon" />}
                      />
                    </Col>
                    <Col md={4}>
                      <AboutUsBox
                        title={"آخرین بروزرسانی:"}
                        desc={"1402/09/20"}
                        icon={<FaCalendarAlt className="course-info-icon" />}
                      />
                    </Col>
                    <Col md={4}>
                      <AboutUsBox
                        title={"روش پشتیبانی:"}
                        desc={"آنلاین"}
                        icon={<FaUser className="course-info-icon" />}
                      />
                    </Col>
                    <Col md={4}>
                      <AboutUsBox
                        title={"پیش نیاز:"}
                        desc={"HTML & CSS"}
                        icon={<MdError className="course-info-icon" />}
                      />
                    </Col>
                    <Col md={4}>
                      <AboutUsBox
                        title={"نوع مشاهده:"}
                        desc={"ضبط شده / آنلاین"}
                        icon={<FaPlay className="course-info-icon" />}
                      />
                    </Col>
                  </Row>
                </div>

                {/* progress section*/}
                <div className="progress-box">
                  <span>
                    <FaChartLine className="chart-icon" /> درصد پیشرفت دوره:
                    100%
                  </span>
                  <ProgressBar animated now={100} variant="success" />
                </div>

                {/* بخش مربوط به توضیحات */}
                <div className="description-box">
                  <div className="desc-box">
                    <SectionsHeader
                      title={"آموزش 20 کتابخانه جاوا اسکریپت مخصوص بازار کار"}
                    />
                    <img src={articleImg1} alt="#" />
                    <p>
                      کتابخانه های بسیار زیادی برای زبان جاوااسکریپت وجود دارد و
                      سالانه چندین کتابخانه جدید نیز به این لیست اضافه میشود که
                      در بازار کار به شدت از آن ها استفاده میشود و اگر بدون بلد
                      بودن این کتابخانه ها وارد بازار کار شوید خیلی اذیت خواهید
                      شد و حتی ممکن است ناامید شوید!
                      <br />
                      در این دوره نحوه کار با 20 مورد از پر استفاده ترین
                      کتابخانه های جاوااسکریپت بصورت پروژه محور به شما عزیزان
                      آموزش داده میشود تا هیچ مشکلی برای ورود به بازار کار
                      نداشته باشید
                    </p>
                  </div>

                  <div className="desc-box">
                    <SectionsHeader
                      title={
                        "هدف از این دوره چیست؟ (تنها راه ورود به بازار کار و کسب درآمد)"
                      }
                    />
                    <img src={articleImg2} alt="#" />
                    <p>
                      کتابخانه های بسیار زیادی برای زبان جاوااسکریپت وجود دارد و
                      سالانه چندین کتابخانه جدید نیز به این لیست اضافه میشود که
                      در بازار کار به شدت از آن ها استفاده میشود و اگر بدون بلد
                      بودن این کتابخانه ها وارد بازار کار شوید خیلی اذیت خواهید
                      شد و حتی ممکن است ناامید شوید!
                      <br />
                      در این دوره نحوه کار با 20 مورد از پر استفاده ترین
                      کتابخانه های جاوااسکریپت بصورت پروژه محور به شما عزیزان
                      آموزش داده میشود تا هیچ مشکلی برای ورود به بازار کار
                      نداشته باشید
                    </p>
                  </div>

                  <div className="accordion-course-link">
                    <div className="download-btns">
                      <button className="download-btn">
                        دانلود همگی ویدیو ها
                      </button>
                      <button className="download-btn">
                        دانلود همگانی پیوست ها
                      </button>
                    </div>
                    {/* بخش مربوط به آکاردعون */}
                    <div className="accordions">
                      <Accordion>
                        <Accordion.Item eventKey="0" className="acoordion-item">
                          <Accordion.Header className="accordion-header">
                            معرفی دوره
                          </Accordion.Header>
                          <Accordion.Body className="accordion-body">
                            <div className="right">
                              <span className="count">1</span>
                              <FaYoutube />
                              <span>
                                معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
                              </span>
                            </div>
                            <div className="left">18:34</div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="acoordion-item">
                          <Accordion.Header className="accordion-header">
                            معرفی دوره
                          </Accordion.Header>
                          <Accordion.Body className="accordion-body">
                            <div className="right">
                              <span className="count">2</span>
                              <FaYoutube />
                              <span>
                                معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
                              </span>
                            </div>
                            <div className="left">18:34</div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="acoordion-item">
                          <Accordion.Header className="accordion-header">
                            معرفی دوره
                          </Accordion.Header>
                          <Accordion.Body className="accordion-body">
                            <div className="right">
                              <span className="count">3</span>
                              <FaYoutube />
                              <span>
                                معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
                              </span>
                            </div>
                            <div className="left">18:34</div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                </div>

                {/* teacher box */}
                <div className="teacher-info">
                  <div className="info-box">
                    <div className="right">
                      <div className="image-box">
                        <img src={teacherImg} alt="teacher image" />
                      </div>
                      <div className="name-box">
                        <span className="name">علیرضا جباری</span>
                        <span className="job">Frontend Developer</span>
                      </div>
                    </div>

                    <div className="left">
                      <span>
                        <FaChalkboardTeacher /> مدرس
                      </span>
                    </div>
                  </div>

                  <div className="desc">
                    <p>
                      اول از همه برنامه نویسی اندروید رو شروع کردم و نزدیک به دو
                      سال با زبان جاوا اندروید کار میکردم. بعد تصمیم گرفتم در
                      زمینه وب فعالیت داشته باشم و ...
                    </p>
                  </div>
                </div>

                {/* comment box */}
                <div className="comment-box">
                  <p className="title">دیدگاهتان را بنویسید</p>
                  <p>با عنوان علیرضا جباری وارد شده اید.</p>

                  <form action="">
                    <label htmlFor="">دیدگاه:</label>
                    <textarea
                      className="custom-textarea"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </form>

                  <button className="comment-box-btn">فرستادن دیدگاه</button>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="left-side">
                <div className="is-course-student">
                  <div className="box">
                    <IoIosSchool className="is-course-student-icon" />
                    دانشجوی دوره هستید
                  </div>
                </div>

                <div className="students-number">
                  <div className="top">
                    <PiStudentBold className="student-icon" /> تعداد دانشجو:{" "}
                    <span className="count">178</span>
                  </div>

                  <div className="bottom">
                    <div className="comments-count">
                      <FaRegComments className="comments-icon" /> 67 دیدگاه
                    </div>
                    <div className="view">
                      <FiEye className="view-icon" /> 14,234 بازدید
                    </div>
                  </div>
                </div>

                <div className="link-box">
                  <span className="link-box-title">
                    <HiOutlineLink className="link-icon" /> لینک کوتاه
                  </span>
                  <a
                    href="https://sabzlearn.ir/?p=117472"
                    className="link-address"
                  >
                    https://sabzlearn.ir/?p=117472
                  </a>
                </div>

                <div className="course-titles-box">
                  <h3>سر فصل های دوره</h3>
                  <p>
                    برای مشاهده و یا دانلود دوره روی کلمه{" "}
                    <Link to="">لینک</Link> کلیک کنید
                  </p>
                </div>

                <div className="related-courses">
                  <h3 className="title">دوره های مرتبط</h3>
                  <Link to="" className="related-course-link">
                    <img
                      src={jsTakhasosiProject}
                      alt="پروژه های تخصصی با جاوااسکریپت"
                    />
                    <span className="course-name">
                      پروژه های تخصصی با جاوااسکریپت
                    </span>
                  </Link>

                  <Link to="" className="related-course-link">
                    <img src={motekhasesNodeJs} alt="دوره Api نویسی" />
                    <span className="course-name">دوره Api نویسی</span>
                  </Link>

                  <Link to="" className="related-course-link">
                    <img src={motekhasesJango} alt="متخصص جنگو" />
                    <span className="course-name">متخصص جنگو</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </>
  );
}
