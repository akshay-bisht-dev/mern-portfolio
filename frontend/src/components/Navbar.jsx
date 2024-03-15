import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className='navbar'>
                    <div className='logo'>
                        <Link to='/'>Portfolio</Link>
                    </div>

                    <div className='menu'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/projects'>Projects</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar