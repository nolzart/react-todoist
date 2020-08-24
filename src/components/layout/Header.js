import React from 'react'
// import { Link } from 'react-router-dom'

const Header = () => (
    <header className='header'>
        <div className='header__left'>
            <ion-icon name='grid-outline' class='header__icon'></ion-icon>
            <ion-icon name='home-outline' class='header__icon'></ion-icon>
            <input
                type='text'
                className='header__left--search'
                id='search'
                name='search'
                placeholder='Find'
            />
        </div>
        <ul className='header__right'>
            <li className='header__right--item'>
                <ion-icon name='add-outline' class='header__icon'></ion-icon>
            </li>
            <li className='header__right--item'>
            <ion-icon name="notifications" class='header__icon'></ion-icon>
            </li>
            <li className='header__right--item'></li>
        </ul>
    </header>
)

export default Header
