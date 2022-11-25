import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HeaderAboutUs = () => {
    return (
        <div>

            <nav className="bg-white  dark:bg-gray-900 w-full border-b ">
                <div className="container flex items-center justify-center ">

                    <div className="flex items-center justify-center w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col  mt-4  md:flex-row mb-0">
                            <NavLink to='/about'>
                                <li>
                                    <p href="#" className="block py-2 pl-3 pr-4  rounded text-purple-700 md:hover:text-purple-700">ABOUT US</p>
                                </li>
                            </NavLink>
                            <NavLink to='/about/careers'>
                                <li>
                                    <p href="#" className="block py-2 pl-3 pr-4 rounded text-purple-700 md:hover:text-purple-700">CAREERS</p>
                                </li>
                            </NavLink>
                            <NavLink to='/about/escrow-service'>
                                <li>
                                    <p href="#" className="block py-2 pl-3 pr-4  rounded text-purple-700 md:hover:text-purple-700">ESCROWED TRADE</p>
                                </li>
                            </NavLink>
                            <NavLink to='/about/press'>
                                <li>
                                    <p href="#" className="block py-2 pl-3 pr-4  rounded text-purple-700 md:hover:text-purple-700">PRESS</p>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>

            </nav>
            <Outlet />
        </div>
    )
}

export default HeaderAboutUs