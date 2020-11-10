import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
const Home = () => {
    const { OnAuthStateChanged } = useAuth()
    OnAuthStateChanged(isAuth => {
        if (isAuth) {
            console.log('si hay un usuario')
        } else {
            console.log('no hay un usuario')
        }
    })
    return (
        <>
            <header className='header-home'>
                <div className='header-home__brand'>
                    <img
                        src='img/logo.png'
                        alt='Todoist logo'
                        className='header-home__brand--logo'
                    />
                    <h2>todoist</h2>
                </div>
                <ul className='header-home__menu'>
                    <li>
                        <Link to='/login' className='header-home__menu--login'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/signup' className='header-home__menu--signup'>
                            Signup
                        </Link>
                    </li>
                </ul>
            </header>
            <main className='main'>
                <img src='img/banner.jpg' alt='banner productivity' />
                <div className='main__title'>
                    <span>Organize it all </span>
                    <span>with Todoist</span>
                    <Link className='btn btn--red btn--radius btn--small' to='/app'>
                        Get Started
                    </Link>
                </div>
            </main>
        </>
    )
}
export default Home
