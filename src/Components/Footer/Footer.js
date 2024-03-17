import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <Container>
      <div className="footer-container">
        <Row>
          <Col xs={12} md={6} lg={4}>
            <h2 className="footer-title">درباره ما</h2>
            <p className="footer-desc">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <h2 className="footer-title">آخرین مطالب</h2>
            <div className="footer-learning-links">
              <Link to='' className="footer-learning-link">نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون</Link>
              <Link to='' className="footer-learning-link">چگونه پایتون را آپدیت کنیم؟ | آموزش صفر تا صد آپدیت کردن پایتون</Link>
              <Link to='' className="footer-learning-link">آموزش نصب پایتون در مک, ویندوز و لینوکس | گام به گام و تصویری</Link>
              <Link to='' className="footer-learning-link">بهترین فریم ورک های فرانت اند | 16 فریم ورک فرانت اند + بررسی معایب و مزایا</Link>
              <Link to='' className="footer-learning-link">معرفی بهترین سایت آموزش جاوااسکریپت [تجربه محور] + آموزش رایگان</Link>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <h2 className="footer-title">دسترسی سریع</h2>
            <div className="footer-course-links">
              <div className="right">
                <Link to='' className="footer-course-link">آموزش HTML</Link>
                <Link to='' className="footer-course-link">آموزش جاوااسکریپت</Link>
                <Link to='' className="footer-course-link">آموزش ریکت</Link>
              </div>

              <div className="left">
                <Link to='' className="footer-course-link">آموزش CSS</Link>
                <Link to='' className="footer-course-link">آموزش بوت استرپ</Link>
                <Link to='' className="footer-course-link">آموزش پایتون</Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>

    <div className="footer-copyright">
      <span className="copyright-text">کلیه حقوق <a href="#" className="copyright-link">این وبسایت</a> محفوظ است.</span>
    </div>
    </>
  );
}
