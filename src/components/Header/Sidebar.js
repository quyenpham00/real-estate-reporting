import React from 'react'
import {
  FaHome,
  FaChartLine,
  FaUserFriends,
  FaGem,
  FaCogs,
} from 'react-icons/fa'
export default function Sidebar() {
  return (
    <div
      className='d-flex flex-column flex-shrink-0 p-3 sidebar-container'
      style={{ width: '250px' }}
    >
      <ul className='nav nav-pills flex-column mb-auto'>
        <li className='nav-item'>
          <a href='#' className='nav-link active' aria-current='page'>
            <FaHome className='icon' />
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link link-dark'>
            <FaChartLine className='icon' />
            Dashboard
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link link-dark'>
            <FaUserFriends className='icon' />
            Teams
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link link-dark'>
            <FaGem className='icon' />
            Premium
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link link-dark'>
            <FaCogs className='icon' />
            Settings
          </a>
        </li>
      </ul>
    </div>
  )
}
