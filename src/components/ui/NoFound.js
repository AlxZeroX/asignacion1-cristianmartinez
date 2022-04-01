import React from 'react'
import { Link } from 'react-router-dom'

export const NoFound = () => {
    return (
        <div
            className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-blue-900
    to-black
  "
        >
            <div className="px-40 py-20">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-blue-600 text-9xl">404</h1>

                    <h6 className="mb-2 text-2xl font-bold text-center text-white md:text-3xl">
                        <span className="text-red-500">Oops!</span> Page not found
                    </h6>

                    <p className="mb-8 text-center text-white md:text-lg">
                        The page you’re looking for doesn’t exist.
                    </p>

                    <Link className="px-2 text-xl text-center font-bold animate-pulse text-red-500" to="/"> HOME </Link>

                </div>
            </div>
        </div>)
}
