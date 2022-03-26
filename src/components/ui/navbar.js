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
        <nav className="flex justify-between bg-gray-500">
            <div className="flex flex-row justify-center">

                <Link className="" to="/">

                    <div><img src={logo} alt="Logo" className="animate__animated animate__fadeInLeft"></img></div>

                </Link>
                <Link className="px-2 text-xl text-center font-bold animate-pulse text-black" to="/"> E-Commerce </Link>
            </div>

            <div className="flex flex-row justify-center">
                <div className="flex space-x-4 mx-auto">

                    <NavLink
                        className={({ isActive }) => 'text-black px-8 py-2 rounded-lg text-xl font-medium hover:bg-blue-400 hover:text-white' + (isActive ? 'active' : '')}
                        to="/ps4"
                    >
                        PS4
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'text-black px-8 py-2 rounded-lg text-xl font-medium hover:bg-red-600 hover:text-white' + (isActive ? 'active' : '')}
                        to="/pc"
                    >
                        PC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'text-black px-8 py-2 rounded-lg text-xl font-medium hover:bg-green-500 hover:text-white' + (isActive ? 'active' : '')}
                        to="/xbox"
                    >
                        XBOX
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'text-black px-8 py-2 rounded-lg text-xl font-medium hover:bg-orange-600 hover:text-white' + (isActive ? 'active' : '')}
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="flex flex-row justify-center">
                <ul className="text-white flex space-x-4 mx-auto">

                    <span className="px-2 py-5">
                        {user.name}
                    </span>

                    <button
                        className="fa-solid fa-arrow-right-from-bracket pr-10"
                        onClick={handleLogout}
                    >
                    </button>

                </ul>
            </div>

        </nav>

    )
}