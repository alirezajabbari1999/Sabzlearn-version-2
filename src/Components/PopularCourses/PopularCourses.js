import React from "react";
import "./PopularCourses.css";
import { Container } from "react-bootstrap";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import { popularCoursesData } from "../../Datas";
import Course from "../Course/Course";
import SwiperSlider from "./../SwiperSlider/SwiperSlider";
import { SwiperSlide } from "swiper/react";

export default function PopularCourses() {
  return (
    <Container>
      <div className="popular-container">
        <SectionsHeader title={"محبوب ترین دوره ها"} />

        {/* در اینجا کامپوننت مربوط به اسلایدر رو ایمپورت کردم و روی دیتا بیس مپ زدم
      و به ازای هر داده یک بار کامپوننت کورس رو رندر کردم
      دلیل استفاده از سوایپر اسلاید هم اینه که این بخش از کد میره و در کامپوننت سوایپر اجرا میشه */}
        <SwiperSlider>
          {popularCoursesData.map((course) => (
            <SwiperSlide key={course.id}>
              <Course {...course} />
            </SwiperSlide>
          ))}
        </SwiperSlider>
      </div>
    </Container>
  );
}
