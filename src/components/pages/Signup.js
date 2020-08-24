import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <section className='login'>
            <div className='login__container'>
                <Link className='login__container--logo' to='/'>
                    <img src='img/logo.png' alt='Todoist Logo' />
                    <h2>todoist</h2>
                </Link>
                <h2 className='heading-secondary'>Sign up</h2>
                <a href='/login-google' className='login__container--link'>
                    <img src="img/google-color.svg" alt="Google icon"/> Continue with Google
                </a>
                <a href='/login-facebbok' className='login__container--link'>
                <img src="img/facebook-square-color.svg" alt="Google icon"/> Continue with Facebook
                </a>
                <div className='separator-or'>
                    <span>OR</span>
                </div>
                <form className='form'>
                    <div className='form__group'>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            className='form__input form__input--email'
                            placeholder='Email'
                            required
                        />
                        <label htmlFor='email' className='form__label'>
                            Email
                        </label>
                    </div>
                    <button className='btn btn--large btn--red'>
                        <Link to='/signup/step_two' className="u-color-white">Sign up with email</Link>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Signup
