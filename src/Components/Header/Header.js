import React from 'react'
import './Header.css'
import Topbar from '../Topbar/Topbar'
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing'
import Sidebar from '../Sidebar/Sidebar'

export default function Header() {
  return (
    <div className='Header-container'>
      <Topbar />
      <Navbar />
      <Landing />
      <Sidebar />
    </div>
  )
}
