import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const toggleShowPassword = e => {
        let inputType = e.target.parentNode.childNodes[1]
        e.target.name = inputType.type === 'password' ? 'eye-outline' : 'eye-off-outline'
        inputType.type = inputType.type === 'password' ? 'text' : 'password'
    }
    return (
        <section className='login'>
            <div className='login__container'>
                <Link className='login__container--logo' to='/'>
                    <img src='img/logo.png' alt='Todoist logo' />
                    <h2>todoist</h2>
                </Link>
                <h2 className='heading-secondary'>Log in</h2>
                <a href='/login-google' className='login__container--link'>
                    <img src='img/google-color.svg' alt='Google icon' />
                    Continue with Google
                </a>
                <a href='/login-facebbok' className='login__container--link'>
                    <img
                        src='img/facebook-square-color.svg'
                        alt='Google icon'
                    />
                    Continue with Facebook
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
                    <div className='form__group'>
                        <ion-icon
                            name='eye-off-outline'
                            class='form__input--show-password'
                            onClick={toggleShowPassword}
                        ></ion-icon>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            className='form__input form__input--password'
                            placeholder='Password'
                            required
                        />
                        <label htmlFor='password' className='form__label'>
                            Password
                        </label>
                    </div>
                    <button className='btn btn--large btn--red'>Log in</button>
                    <label
                        htmlFor='permanent-login'
                        className='permanent-login'
                    >
                        <input
                            type='checkbox'
                            name='permanent-login'
                            id='permanent-login'
                            className='form__checkbox'
                        />
                        <span className='form__checkbox--checked'></span>Keep me
                        logged in
                    </label>
                </form>
                <a href='/ForgotPassword' className='login__container--forgot'>
                    Forgot your Password?
                </a>
                <hr />
                <div className='help-block'>
                    <Link to='/signup'>
                        You do not have an account? <span>Sign up</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Login
