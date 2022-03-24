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
        <nav className="py-12 flex justify-between bg-slate-600">
            <div className="flex flex-row justify-center">

                <Link className="" to="/">

                    <div><img src={logo} alt="Logo" className="animate__animated animate__fadeInLeft"></img></div>

                </Link>
                <Link className="px-2 text-xl text-center font-bold animate-pulse" to="/"> E-Commerce </Link>
            </div>

            <div className="flex flex-row justify-center space-x-8">
                <div className="">

                    <NavLink
                        className={({ isActive }) => '' + (isActive ? 'active' : '')}
                        to="/marvel"
                    >
                        Consolas
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => '' + (isActive ? 'active' : '')}
                        to="/dc"
                    >
                        Videojuegos
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => '' + (isActive ? 'active' : '')}
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="">
                <ul className="">

                    <span className="">
                        {user.name}
                    </span>

                    <button
                        className=""
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}