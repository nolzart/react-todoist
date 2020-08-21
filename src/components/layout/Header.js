import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header className='header'>
        <div className='header__brand'>
            <img
                src='img/logo.png'
                alt='Todoist logo'
                className='header__brand--logo'
            />
            <h2>todoist</h2>
        </div>
        <ul className='header__menu'>
            <li>
                <Link to='/login' className='header__menu--login'>Login</Link>
            </li>
            <li>
                <Link to='/signup' className='header__menu--signup'>Signup</Link>
            </li>
        </ul>
    </header>
)

export default Header
