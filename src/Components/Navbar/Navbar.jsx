import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
  return (
    <nav className='flex p-4 items-center text-textPrimary bg-bgPrimary m-0' >
        <NavLink to={"/"} className='mr-auto flex items-end'>
            <img src="/e.png" alt="logo" width={50} className='mr-0' />
            <p className='text-2xl -ml-1 text-textPrimary font-extrabold h-fit'>laine.</p>
        </NavLink>
        <ul className='text-xl font-bold md:flex items-center gap-6 [&>*]:cursor-pointer hidden'>
            <NavLink to={"about"}>About</NavLink>
            <NavLink to={"store"}>Official Store</NavLink>
        </ul>
        <span className="cursor-pointer text-2xl md:hidden">
          <FontAwesomeIcon icon={faBars} />
        </span>
    </nav>
  )
}
