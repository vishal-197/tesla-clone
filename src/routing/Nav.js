import React from 'react'
import {Link } from 'react-router-dom'


function Nav() {
  return (
    <ul>
        <li>
            <Link  to ="/">Main</Link>
        </li>
        <li>
            <Link to = "/About">About</Link>
        </li>
        <li>
            <Link to = "/Blog">Blog</Link>
        </li>
        <li>
            <Link to = "/Contact">Contact</Link>
        </li>
    </ul>
  )
}

export default Nav