import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../../assets/appland_landscape-e1414258473112.png';

export const Footer = () => {

    return (
        <footer className="footer navbar-expand-sm">

            <Link
                className="navbar-brand"
                to="/"
            >
            </Link>
            <Link
                className="navbar-brand"
                to="/">

                <span className='footer-link'>
                    <a href='/'>Appland E-Commerce
                    </a>
                </span>

            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/marvel"
                    >
                        Sobre Nosotros
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/dc"
                    >
                        Direccion
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/search"
                    >
                        Contactanos
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <div><img src={logo} alt="Logo" className="animate__animated animate__fadeInLeft"></img></div>

                </ul>
            </div>

            <div>
                <span className='footer-link'><a href='/'>Home</a></span>
                <span className='footer-link'><a href='/about'>About</a></span>
                <span className='footer-link'><a href='/blog'>Blog</a></span>
                <span className='footer-link'><a href='/contact'>Contact</a></span>
            </div>
            <div className='footer-copyright'>2022. This site was made by Cristian Martinez with React.</div>
        </footer>

    )
}