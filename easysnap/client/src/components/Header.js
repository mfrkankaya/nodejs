import React from 'react'

import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h2 className='logo__title'>easysnap</h2>
      </div>

      <div className='header_menu'>
        <NavLink exact to='/'>
          snaps
        </NavLink>
        <NavLink exact to='/login'>
          login
        </NavLink>
        <NavLink exact to='/join'>
          join
        </NavLink>
      </div>
    </header>
  )
}

export default Header
