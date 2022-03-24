import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../../assets/appland_landscape-e1414258473112.png';

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="flex mx-auto">

                <span className='footer-link'><a href='/'>Home</a></span>
                <span className='footer-link'><a href='/about'>About</a></span>
                <span className='footer-link'><a href='/contact'>Contact</a></span>

            </div>
            <div className="flex justify-end px-5 ">
                <div className="flex sm:justify-center xl:justify-start">
                    <a href="" className="w-8 h-8 border-2 border-white rounded-full text-center py-1 text-yellow-400 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="" className="w-8 h-8 border-2 border-white rounded-full text-center py-1 ml-2 text-yellow-400 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="w-8 h-8 border-2 border-white rounded-full text-center py-1 ml-2 text-yellow-400 hover:text-white hover:bg-red-600 hover:border-red-600">
                        <i className="fab fa-google-plus-g"></i>
                    </a>
                </div>

                <img
                    src={logo}
                    alt="Logo"
                    className="animate__animated animate__fadeInLeft"
                >
                </img>
                <Link
                    className=""
                    to="/">
                    <span className='footer-link fa-fade'>
                        <a
                            href='/'>E-Commerce
                        </a>
                    </span>
                </Link>
            </div>
            <div className='flex sm:justify-center xl:justify-center footer-copyright'>2022. This site was made by Cristian Martinez with React.</div>
        </footer>
    )
}