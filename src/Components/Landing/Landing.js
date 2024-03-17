import React, { useState, useEffect } from "react";
import "./Landing.css";
import { IoSearchSharp } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { GiNotebook } from "react-icons/gi";
import { AiOutlineFieldTime } from "react-icons/ai";

// برای متحرک سازی تایتل لندینگ از لایبرری
// type writer effect
// استفاده کردم
// npm i typewriter-effect
import Typewriter from "typewriter-effect";

export default function Landing() {
  //  وضعیت محلی برای ذخیره تعداد اعداد
  const [numbers, setNumbers] = useState({
    students: 0,
    courses: 0,
    minutes: 0,
  });

  useEffect(() => {
    // تابع برای شمارش اعداد به سمت بالا تا مقدار 300
    const countUpNumbers = () => {
      let count1 = 0;
      let count2 = 0;
      let count3 = 0;
      const interval1 = setInterval(() => {
        count1++;
        // اگر شمارش به 300 رسید، دستور clearInterval برای پایان دادن به شمارش فراخوانی می‌شود
        if (count1 > 983) {
          clearInterval(interval1);
        } else {
          // به‌روزرسانی وضعیت محلی با شمارش جدید
          setNumbers((prevNumbers) => ({
            ...prevNumbers,
            students: count1,
          }));
        }
      }, 0.0001); // 10 میلی‌ثانیه انتظار بین هر شمارش

      const interval2 = setInterval(() => {
        count2++;

        if (count2 > 40) {
          clearInterval(interval2);
        } else {
          setNumbers((prevNumbers) => ({
            ...prevNumbers,
            courses: count2,
          }));
        }
      }, 0.0001);

      const interval3 = setInterval(() => {
        count3++;

        if (count3 > 871) {
          clearInterval(interval3);
        } else {
          setNumbers((prevNumbers) => ({
            ...prevNumbers,
            minutes: count3,
          }));
        }
      }, 0.0001);
    };

    // فراخوانی تابع برای شمارش اعداد
    countUpNumbers();
  }, []);

  return (
    <div className="landing-container">
      <h1 className="landing-title">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("ما به هر قیمتی دوره آموزشی تولید نمیکنیم !")
              .start()
              .pauseFor(2500)
              .deleteAll()
              .typeString("توسعه دهنده : علیرضا جباری")
              .start()
              .pauseFor(2500)
              .deleteAll();
          }}
          options={{
            loop: true,
          }}
        />
      </h1>
      <h4 className="landing-desc">
        با آکادمی سبزلرن برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن
      </h4>
      <div className="landing-search-box">
        <input type="text" placeholder="چی دوست داری یاد بگیری..." />

        <span className="search-icon-box">
          <IoSearchSharp className="search-icon" />
        </span>
      </div>
      <div className="landing-infos">
        <div className="info-item">
          <PiStudentBold className="info-icon" />
          <span className="info-number">{numbers.students}</span>
          <span className="info-desc">کاربر توی سبزلرن ثبت نام کردن</span>
        </div>

        <div className="info-item">
          <GiNotebook className="info-icon" />
          <span className="info-number">{numbers.courses}</span>
          <span className="info-desc">دوره آموزشی داریم</span>
        </div>

        <div className="info-item">
          <AiOutlineFieldTime className="info-icon" />
          <span className="info-number">{numbers.minutes}</span>
          <span className="info-desc">دقیقه آموزش تولید کردیم</span>
        </div>
      </div>
    </div>
  );
}
