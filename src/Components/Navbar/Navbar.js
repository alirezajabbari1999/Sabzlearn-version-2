import React, { useState,useContext } from "react";
import "./Navbar.css";
import logoImg from "./../../images/sabzlearn-logo.webp";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import {
  frontendSubMenu,
  securitySubMenu,
  articleSubMenu,
  pythonSubMenu,
} from "./../../Datas";
import Submenu from "../Submenu/Submenu";
import productContext from "../Context/ProductContext";

export default function Navbar() {
  const [showSubmenu, setShowSubmenu] = useState(null); // مربوط به وضعیت باز یا بسته بودن ساب منو ها
  const contextData = useContext(productContext)

  const handleSubMenuOpen = (index) => {
    setShowSubmenu(index);
  };

  const handleSubMenuClose = () => {
    setShowSubmenu(null);
  };

  const openSidebarHandler = ()=>{
    contextData.setShowSidebar(true)
  }

  return (
    <div className="navbar-container">

    {/* آیکون مربوط به ساید بار */}
    <button className="sidebar-open-btn" onClick={()=> openSidebarHandler()}>
      <IoMenu className="sidebar-open-icon"/>
    </button>

      <div className="right">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logoImg} alt="" />
          </Link>
        </div>

        <ul className="navbar-menu">
          <li className="menu-item">صفحه اصلی</li>
          <li
            className="menu-item"
            onMouseEnter={() => handleSubMenuOpen(0)}
            onMouseLeave={handleSubMenuClose}
          >
            <span className="title">
              فرانت اند
              <IoIosArrowDown />
            </span>
            <span className="submenu-component">
              {showSubmenu === 0 && <Submenu items={frontendSubMenu} />}
            </span>
          </li>
          <li
            className="menu-item"
            onMouseEnter={() => handleSubMenuOpen(1)}
            onMouseLeave={handleSubMenuClose}
          >
            <span className="title">
              امنیت
              <IoIosArrowDown />
            </span>
            <span className="submenu-component">
              {showSubmenu === 1 && <Submenu items={securitySubMenu} />}
            </span>
          </li>
          <li
            className="menu-item"
            onMouseEnter={() => handleSubMenuOpen(2)}
            onMouseLeave={handleSubMenuClose}
          >
            <span className="title">
              مقالات
              <IoIosArrowDown />
            </span>
            <span className="submenu-component">
              {showSubmenu === 2 && <Submenu items={articleSubMenu} />}
            </span>
          </li>
          <li
            className="menu-item"
            onMouseEnter={() => handleSubMenuOpen(3)}
            onMouseLeave={handleSubMenuClose}
          >
            <span className="title">
              پایتون
              <IoIosArrowDown />
            </span>
            <span className="submenu-component">
              {showSubmenu === 3 && <Submenu items={pythonSubMenu} />}
            </span>
          </li>
          <li className="menu-item">
            <span className="title">مهارت های نرم</span>
          </li>
        </ul>
      </div>

      <div className="left">
        <div className="search-icon-box">
          <input type="text" className="navbar-search-input" placeholder="جستجو..."/>
          <IoSearchSharp className="search-icon" />
        </div>

        <div className="user-basket">
          <FaShoppingCart className="basket-icon" />
        </div>

        <div className="username">
          <button>علیرضا جباری</button>
        </div>
      </div>
    </div>
  );
}
