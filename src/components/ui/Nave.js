import React from 'react'
import logo from '../../assets/appland_landscape-e1414258473112.png';
import { Link } from 'react-router-dom';

export const Nave = () => {
    return (

        <nav class="py-12 flex justify-between bg-slate-600" >
            <div class="flex flex-row justify-center">
            <img alt="logo" className="object-cover object-center w-full h-full rounded-lg"
                    src={logo} />
                <Link className="px-2 text-xl text-center font-bold" to="/"> E-Commerce </Link>
            </div>
            <div class="flex flex-row justify-center space-x-8">
                <div class="flex flex-row justify-center my-auto space-x-4">
                    <a href="#" class="px-2">
                        Products
                    </a>
                    <a href="#" class="px-2">
                        Features
                    </a>
                    <a href="#" class="px-2">
                        About
                    </a>
                    <a href="#" class="px-2">
                        Contact
                    </a>
                </div>
                <div class="flex flex-row justify-center items-center my-auto space-x-4">
                    <a href="#" class="px-2">
                        Login
                    </a>
                    <div class="w-0.5 h-6 bg-gray-700 opacity-50"></div>
                    <a href="#" class="px-6 py-2 bg-brand-button rounded-full">
                        Register
                    </a>
                </div>
            </div>
        </nav>

    )
}


{/* <section className="overflow-hidden text-gray-700 ">
<div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src={logo} />
            </div>
        </div>
        <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
            </div>
        </div>
        <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
            </div>
        </div>
        <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
            </div>
        </div>
        <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
            </div>
        </div>
        <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
            </div>
        </div>
    </div>
</div>
</section> */}