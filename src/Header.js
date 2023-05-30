import React from 'react'
import './header.css'

function Header() {
  return (
    <>
  <header>

    <img src="img/logo.svg " alt= "logo"></img>

    <ul>
      <li><a href='#'>Moddel S</a> </li>
      <li><a href='#'>Moddel 3</a> </li>
      <li><a href='#'>Moddel x</a> </li>
      <li><a href='#'>Moddel y</a> </li>
      <li><a href='#'>Solor Roof</a> </li>
      <li><a href='#'>Solor Panls</a> </li>
       
    </ul>

    <ul>
      <li><a href='#'>Shop</a></li>
      <li><a href='#'>Account</a></li>
      <li><a href='#'>Menu</a></li>
    </ul>
  </header>
    <ul className='sidebar'>
    <li><a href='#'>Moddel S</a> </li>
      <li><a href='#'>Moddel 3</a> </li>
      <li><a href='#'>Moddel x</a> </li>
      <li><a href='#'>Moddel y</a> </li>
      <li><a href='#'>Solor Roof</a> </li>
      <li><a href='#'>Solor Panls</a> </li>
      <li><a href='#'>Existing Inventory</a> </li>
      <li><a href='#'>Used Inventory</a> </li>
      <li><a href='#'>Trade In</a> </li>
      <li><a href='#'>Test Drive</a> </li>
      <li><a href='#'>Powerwall</a> </li>
      <li><a href='#'>Commercial Energy</a> </li>
    </ul>
    </>
    

  )
}

export default Header