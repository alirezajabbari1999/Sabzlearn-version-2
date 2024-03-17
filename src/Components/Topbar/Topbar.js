import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function Topbar() {
  return (
    <div className='topbar-container'>
      <div className="right">
        <ul className='menu'>
          <li><Link to='' className='list-item'>آموزش HTML</Link></li>
          <li><Link to='' className='list-item'>آموزش Css</Link></li>
          <li><Link to='' className='list-item'>آموزش جاوا اسکریپت</Link></li>
          <li><Link to='' className='list-item'>آموزش بوت استرپ</Link></li>
          <li><Link to='' className='list-item'>آموزش پایتون</Link></li>
          <li><Link to='' className='list-item'>آموزش ریکت</Link></li>
        </ul>
        <span className='money-value'>20.000 تومان</span>
      </div>

      <div className="left">
        <span className='email'>alirezammww@gmail.com<MdEmail className='topbar-icon'/></span>
        <span className='phone'>09387815030<FaPhone className='topbar-icon'/></span>
      </div>
    </div>
  )
}
