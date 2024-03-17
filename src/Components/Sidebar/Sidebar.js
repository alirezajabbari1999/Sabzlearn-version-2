import React, { useState,useContext } from "react";
import "./Sidebar.css";
import logoImg from "./../../images/sabzlearn-logo.webp";
import { IoMoonOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { sidebarData } from "../../Datas";
import { Link } from "react-router-dom";
import productContext from "../Context/ProductContext";

export default function Sidebar() {
  // در این استیت دیتای کل آیتم های موجود در ساید بار رو ریختم
  const [sidebarItemsData, setSideBardItemsData] = useState(sidebarData);
  // به این استیت اومدم استیت بالا رو دادم و بطور کلی جواب بصورت یه آرایه به تک تک آیتم هاش مقدار فالس دادم
  const [openSidebarItems, setOpenSidebarItems] = useState(
    Array(sidebarItemsData.length).fill(false)
  );
  const contextData = useContext(productContext)
  

  const sidebarItemsToggle = (itemsIndex) => {
    const newOpenState = [...openSidebarItems];
    newOpenState[itemsIndex] = !newOpenState[itemsIndex];
    setOpenSidebarItems(newOpenState);
  };

  const closeSidebarHandler = ()=>{
    contextData.setShowSidebar(false)
  }

  return (
    // <div className="sidebar-container show">
    <div className={`${contextData.showSidebar ? 'show' : ''} sidebar-container`}>
      <div className="sidebar-top">
        <div className="icons">
          <div className="logo">
            <img src={logoImg} alt="" />
          </div>

          <div className="sidebar-btns">
            <button className="dark-light-btn">
              <IoMoonOutline className="dark-light-icon" />
            </button>
            <button className="close-btn" onClick={()=> closeSidebarHandler()}>
              <IoClose className="close-icon" />
            </button>
          </div>
        </div>

        <div className="search-box">
          <input type="text" placeholder="چیو میخوای یاد بگیری؟" />
          <button className="search-btn">
            <IoSearch className="search-icon" />
          </button>
        </div>
      </div>

      <div className="sidebar-bottom">
        {sidebarItemsData.map((item, index) => (
          <>
            <div
              key={index}
              className="sidebar-menu-title"
              onClick={() => sidebarItemsToggle(index)}
            >
              {item.title} <IoIosArrowBack />
            </div>

            {openSidebarItems[index] && (
              <div className="sidebar-menu-items">
                {item.children.map((child, index) => (
                  <Link
                    to={child.path}
                    key={index}
                    className="sidebar-menu-item"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
