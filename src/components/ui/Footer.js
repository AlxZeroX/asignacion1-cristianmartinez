import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/appland_landscape-e1414258473112.png';

export const Footer = () => {

    return (
        <footer className="footer bg-neutral-700 flex-col">
            <div className="flex space-x-4 justify-center">

                <span className='text-white px-6 rounded-lg text-xl font-medium hover:bg-orange-600'><a href='/'>Home</a></span>
                <span className='text-white px-6 rounded-lg text-xl font-medium hover:bg-orange-600'><a href='/'>About</a></span>
                <span className='text-white px-6 rounded-lg text-xl font-medium hover:bg-orange-600'><a href='/'>Contact</a></span>

            </div>
            <div className="flex justify-end px-5">
                    <div className="flex">
                        <a href="/" className="w-8 h-8 border-2 border-white rounded-full text-center py-1 text-yellow-400 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="/" className="w-8 h-8 border-2 border-white rounded-full text-center py-1 ml-2 text-yellow-400 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/" className="w-8 h-8 border-2 border-white rounded-full text-center py-1 ml-2 text-yellow-400 hover:text-white hover:bg-red-600 hover:border-red-600">
                            <i className="fab fa-instagram"></i>
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
                        <div className='text-center font-bold text-yellow-300 fa-fade'>
                            <span
                                href='/'>E-Commerce
                            </span>
                        </div>
                    </Link>
                </div>
                {/* <div className='flex sm:justify-center xl:justify-end text-white text-xs'>2022. This site was made by Cristian Martinez with React.</div> */}

        </footer>
    )
}