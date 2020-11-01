import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar () {
    return (
        <nav className='bg-teal-500 p-3 text-white'>
            <ul className='flex'>
                <li className='mr-6'>
                    <NavLink to={`/`}>
                        Home
                    </NavLink>
                </li>
                <li className='mr-6'>
                    <NavLink to={`/login`}>
                        Login
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}