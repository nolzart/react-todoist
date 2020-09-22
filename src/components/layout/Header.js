import React from 'react'
import useAuth from '../../hooks/useAuth'

const Header = ({ setActiveModal }) => {
    const { signOut } = useAuth()
    return (
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
                <li
                    className='header__right--item'
                    onClick={() => setActiveModal('QUICK_ADD_TASK')}
                >
                    <ion-icon name='add-outline' class='header__icon'></ion-icon>
                </li>
                <li className='header__right--item'>
                    <ion-icon name='notifications' class='header__icon'></ion-icon>
                </li>
                <li className='header__right--item' onClick={signOut}>
                    <ion-icon name='cog-outline' class='header__icon'></ion-icon>
                </li>
            </ul>
        </header>
    )
}

export default Header
