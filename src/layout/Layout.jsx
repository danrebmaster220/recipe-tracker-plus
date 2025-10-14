import React from 'react'
import { Outlet, NavLink } from "react-router-dom"
import './layout.css'

const Layout = ( {siteTitle = "Site", footerContent = ""} ) => {
    return (
    <div className='layout-container'>
        <header className='layout-header'>
            <h1 className='layout-title'>{siteTitle}</h1>
            
        </header>

        <nav className='layout-nav'>
            <NavLink to="/" end className='nav-link'>Home</NavLink>
            <NavLink to="/recipes" className='nav-link'>Recipes</NavLink>
            <NavLink to="/chefs" className='nav-link'>Chefs</NavLink>
            <NavLink to="/about" className='nav-link'>About</NavLink>
        </nav>

        <main className='layout-main'>
            <Outlet />
        </main>

        <footer className='layout-footer'>
            <small>{footerContent}</small>
        </footer>
    </div>
  )
}

export default Layout
