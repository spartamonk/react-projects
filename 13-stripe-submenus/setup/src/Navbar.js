import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Navbar = () => {
  const { pages, openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  return (
    <nav className='nav' onMouseOver={closeSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {pages.map((link, index) => {
            const { page } = link
            return (
              <li key={index}>
                <button className='link-btn' onMouseOver={openSubmenu}>
                  {page}
                </button>
              </li>
            )
          })}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
