import React,{useState,useEffect} from "react";
import "./Course.css";
import { CiUser } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { MdStarRate } from "react-icons/md";
import { PiUsers } from "react-icons/pi";

// برای ایجاد افکت عنگام لود شدن تصاویر از لایبرری 
// skeleton 
// استفاده کردم
// npm install react-loading-skeleton
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Course(props) {

  const [loading, setLoading] = useState(true);

  // خودم یه وقفه 1 ثانیه ای ایجاد کردم برای دیدن افکت لودینگ تصاویر
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <div className="course-card box">
      <div className="card-image-box">
        {loading ? (
          <Skeleton height={200} />
        ) : (
          <img src={props.image} alt="card image" />
        )}
      </div>

      <div className="card-info">
        <span className="card-tag1">{props.tag1}</span>
        <span className="card-tag1">{props.tag2}</span>
        <h4 className="card-title">{props.title}</h4>
        <p className="card-desc">{props.desc}</p>

        <div className="card-teacher">
          <div className="right-side">
            <p>
              <CiUser />
              {props.name}
            </p>
            <span>
              <CiClock2 />
              {props.time}
            </span>
          </div>
          <div className="left-side">
            <span>
              5.0
              <MdStarRate />
            </span>
          </div>
        </div>

        <div className="card-price">
          <span className="user-number">
            <PiUsers />
            {props.member}
          </span>
          <span className="price">{props.price} تومان</span>
        </div>
      </div>
    </div>
  );
}
