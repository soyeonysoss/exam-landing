import React from 'react'

const Nav = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">With</span>
            </div>
            <div className="w-full block flex items-center w-auto">
                <div className="text-sm lg:flex-grow">
                <a className="inline-block mt-0 text-gray-200 hover:text-white mr-4">
                    Sign In
                </a>
                <a className="inline-block mt-0 text-gray-200 hover:text-white mr-4">
                    menu1
                </a>
                <a className="inline-block mt-0 text-gray-200 hover:text-white mr-4">
                    menu2
                </a>
                <a className="inline-block mt-0 text-gray-200 hover:text-white">
                    menu3
                </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;