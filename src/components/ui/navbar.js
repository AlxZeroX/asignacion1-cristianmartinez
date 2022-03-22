import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

import logo from '../../assets/appland_landscape-e1414258473112.png';

export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)

    const navigate = useNavigate();


    const handleLogout = () => {

        dispatch({ type: types.logout });

        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm">

            <Link
                className="navbar-brand"
                to="/"
            >

                <div><img src={logo} alt="Logo" className="img-thumbnail animate__animated animate__fadeInLeft"></img></div>

            </Link>
            <Link
                className="navbar-brand"
                to="/">
                E-Commerce
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/marvel"
                    >
                        Consolas
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/dc"
                    >
                        Videojuegos
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        {user.name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}