import React from 'react'
import './Header.css'
import Logo from './Logo'
import SearchBar from './SearchBar'

const Header = () => {
  return (
   <header id='header' className='header fixed-top d-flex align-items-center'>
<Logo />
<SearchBar />  
{/* {nav} */}
   </header>
  )
}

export default Header