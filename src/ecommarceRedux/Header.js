import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    
    <div className="herder">
        <ul>
            <li><Link to="">Home</Link> </li>
            <li><Link to="">About</Link> </li>
            <li><Link to="">Cart</Link> </li>
        </ul>
    </div>
  )
}

export default Header