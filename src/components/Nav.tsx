import React from 'react'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link href="/">
                    <a className="font-semibold text-xl tracking-tight">
                        With
                    </a>
                </Link>
            </div>
            <div className="w-full block flex items-center w-auto">
                <div className="text-sm lg:flex-grow">
                <Link href="/signup">
                    <a className="inline-block mt-0 text-gray-200 hover:text-white mr-4">
                        Sign Up
                    </a>
                </Link>
                <Link href="/">
                    <a className="inline-block mt-0 text-gray-200 hover:text-white mr-4">
                        menu1
                    </a>
                </Link>
                <Link href="/">
                    <a className="inline-block mt-0 text-gray-200 hover:text-white mr-4">
                        menu2
                    </a>
                </Link>
                <Link href="/">
                    <a className="inline-block mt-0 text-gray-200 hover:text-white mr-4">
                        menu3
                    </a>
                </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;