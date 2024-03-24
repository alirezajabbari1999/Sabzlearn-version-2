import React from "react";
import "./Login.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

// از دو کتابخانه پایین برای اعتبارسنجی فرم استفاده شده
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const loginUser = (event) => {
    event.preventDefault();
    console.log("User Login");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    // onsubmit: کدهای مربوط به زمان سابمیت شدن فرم رو باید اینجا اضافه کنم

    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, "نام کاربری باید بین 8 تا 20 رقم باشد")
        .max(20, "نام کاربری باید بین 8 تا 20 رقم باشد")
        .required("پر کردن این فیلد اجباریست!"),
      password: Yup.string()
        .min(8, "رمزعبور باید بین 8 تا 12 رقم باشد")
        .max(12, "رمزعبور باید بین 8 تا 12 رقم باشد")
        .required("پر کردن این فیلد اجباریست!"),
    }),
  });

  return (
    <>
      <Topbar />
      <Navbar />

      <div className="validation-container">
        <div className="form-container">
          <h1 className="form-title">ورود به حساب کاربری</h1>

          <form onSubmit={formik.handleSubmit}>
            <div className="input-box">
              {/* اینپوت نام کاربری */}
              <input
                type="text"
                placeholder="نام کاربری"
                className={`input-box-input ${
                  // این کد بررسی میکنه که اگر تعداد کاراکتر اینپوت مطابق با شرط بود به
                  // اینپوت کلاس ساکسس بده در غیر این صورت کلاس ارور میده
                  formik.touched.username && formik.errors.username
                    ? "error"
                    : "success"
                }`}
                // این کد باعث نمایش متن ارور زیر اینپوت میشه
                {...formik.getFieldProps("username")}
              />

              {/* این کد بررسی میکنه که اگر اینپوت تاچ شد و اگر اینپوت حاوی ارور بود اون موقع یه دیو بسازه و ارور رو نمایش بده */}
              {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
              ) : null}
            </div>
            <div className="input-box">
              {/* اینپوت پسوورد */}
              <input
                type="password"
                placeholder="رمز عبور"
                className={`input-box-input ${
                  formik.touched.password && formik.errors.password
                    ? "error"
                    : "success"
                }`}
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <Button
              className="submit-btn"
              type="submit"
              onClick={loginUser}
              disabled={false}
            >
              ورود
            </Button>
          </form>

          <p className="is-login">
            کاربر جدید هستید؟{" "}
            <Link to="/register" className="is-login-btn">
              ثبت نام
            </Link>
          </p>

          <div className="notif">
            <ul>
              <li>
                لطفا از مرورگر های مطمعن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید
              </li>
              <li>
                ما هرگز اطلاعات محرمانه شما را از طریق ایمیل درخواست نمیکنیم
              </li>
              <li>لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
