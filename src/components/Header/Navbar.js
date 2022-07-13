import React from 'react'
import { FaGithubAlt } from 'react-icons/fa'

export default function NavbarCustom() {
  return (
    <nav className='navbar navbar-expand-lg navbar-position'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarButtonsExample'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li>
              <a className='navbar-brand ms-4' href='#'>
                <img
                  src='./images/undraw_cabin_hkfr.svg'
                  alt='MDB Logo'
                  loading='lazy'
                  height='50px'
                />
                Flyhome
              </a>
            </li>
          </ul>

          <div className='d-flex align-items-center'>
            <button type='button' className='btn btn-login px-3 me-2'>
              Login
            </button>
            <button type='button' className='btn me-3 btn-login'>
              Sign up for free
            </button>
            <a className='btn btn-dark px-3 me-5' role='button'>
              <FaGithubAlt></FaGithubAlt>
            </a>
            
          </div>
        </div>
      </div>
    </nav>
  )
}
