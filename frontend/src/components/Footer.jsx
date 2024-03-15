import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer>
            <div className='text-center'>
                <p>Created By <Link to='/' className='footer_text'>Akshay Bisht</Link> |  {date} All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer