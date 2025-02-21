import React from 'react'
import './Header.css'
import Logo from './Logo'

const Header = () => {
  return (
   <header id='header' className='header fixed-top d-flex align-items-center'>
<Logo />
{/* {search bar} */}
{/* {nav} */}
   </header>
  )
}

export default Header