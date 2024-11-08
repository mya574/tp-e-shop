import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './header.css'

const Header = () => {
    const [id, setId] = useState(42);
  return (
    <main>
    <header>
      <nav className='navbar'>
        <ul>
            <li className='eltnavbar'>
                <Link to='creerarticle'>Creer</Link>
            </li>
            <li  className='eltnavbar'>
                <Link to='lirearticle'>Lire</Link>
            </li>
            
   
        </ul>
      </nav>
    </header>
    <section>
        <Outlet/>
    </section>
    </main>

  )
}

export default Header
