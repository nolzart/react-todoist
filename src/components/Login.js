import React from 'react'

const Login = () => {
    return (
        <section className='login'>
            <div className='login__container'>
                <div className='login__container--logo'>
                    <img src='img/logo.png' alt='Todoist logo' />
                    <h2>todoist</h2>
                </div>
                <h2 className='heading-secondary'>Log in</h2>
                <a href='/login-google' className='login__container--link'>
                    Continue with Google
                </a>
                <a href='/login-facebbok' className='login__container--link'>
                    Continue with Facebook
                </a>
                <div className='separator-or'>OR</div>
                <form className='form'>
                    <div className='form-group'>
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
                    <div className='form-group'>
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
                    <label htmlFor='permanent-login'>
                        <input
                            type='checkbox'
                            name='permanent-login'
                            id='permanent-login'
                            className='form__input-permanent'
                        />
                        Keep me logged in
                    </label>
                    <a href='/ForgotPassword'>Forgot your Password?</a>
                    <div className='help-block'>
                        <p>
                            <a href='/signup'>
                                <span>Sign up</span>
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login
