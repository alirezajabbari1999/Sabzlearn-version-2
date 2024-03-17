import React from "react";
import "./AboutUsSection.css";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import AboutUsBox from "../AboutUsBox/AboutUsBox";
import { FaRegCopyright } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { MdDiamond } from "react-icons/md";
import { FaCrown } from "react-icons/fa6";
import { Container, Row, Col } from "react-bootstrap";

export default function AboutUsSection() {
  return (
    <Container>
      <div className="about-section-container">
        <SectionsHeader
          title={"ما چه کمکی بهتون میکنیم؟"}
          desc={"از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی است"}
        />

        <div className="about-section-boxes">
          <Row>
            <Col xs={12} md={6}>
              <AboutUsBox
                className="box"
                title={"دوره های اختصاصی"}
                desc={"با پشتیبانی و کیفیت بالا اراعه میده!"}
                icon={<FaRegCopyright />}
              />
            </Col>
            <Col xs={12} md={6}>
              <AboutUsBox
                className="box"
                title={"اجازه تدریس"}
                desc={"به هر مدرسی رو نمیده چون کیفیت براش مهمه"}
                icon={<FaLeaf />}
              />
            </Col>
            <Col xs={12} md={6}>
              <AboutUsBox
                className="box"
                title={"دوره پولی و رایگان"}
                desc={
                  "براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و آپدیت دوره اراعه بده"
                }
                icon={<MdDiamond />}
              />
            </Col>
            <Col xs={12} md={6}>
              <AboutUsBox
                className="box"
                title={"اهمیت به کاربر"}
                desc={
                  "اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست"
                }
                icon={<FaCrown />}
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
