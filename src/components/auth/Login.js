import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'

const Login = props => {
    const { signInWithEmail } = useAuth()

    const [showPassword, setShowPassword] = useState(false)
    const { register, handleSubmit, errors, reset } = useForm({ mode: 'onChange' })
    const [emailBorderStyle, setemailBorderStyle] = useState({
        borderBottom: '2px solid rgb(117, 113, 113)',
    })
    const [passwordBorderStyle, setpasswordBorderStyle] = useState({
        borderBottom: '2px solid rgb(117, 113, 113)',
    })
    const onSubmit = (data) => {
        signInWithEmail(data)
        reset()
        setemailBorderStyle({
            borderBottom: '2px solid rgb(117, 113, 113)',
        })
        setpasswordBorderStyle({
            borderBottom: '2px solid rgb(117, 113, 113)',
        })
        props.history.push('/app')
    }
    return (
        <section className='login'>
            <div className='login__container'>
                <Link className='login__container--logo' to='/'>
                    <img src='img/logo.png' alt='Todoist logo' />
                    <h2>todoist</h2>
                </Link>
                <h2 className='heading-secondary'>Log in</h2>
                <span className='login__container--link'>
                    <img src='img/google-color.svg' alt='Google icon' />
                    Continue with Google
                </span>
                <span className='login__container--link'>
                    <img src='img/facebook-square-color.svg' alt='Google icon' />
                    Continue with Facebook
                </span>
                <div className='separator-or'>
                    <span>OR</span>
                </div>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='form__group'>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            className='form__input form__input--email'
                            placeholder='Email'
                            style={emailBorderStyle}
                            onChange={() =>
                                setemailBorderStyle(
                                    !errors.password
                                        ? { borderBottom: '2px solid  #10ac84' }
                                        : { borderBottom: '2px solid #e44232' }
                                )
                            }
                            ref={register({
                                required: 'Required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'invalid email address',
                                },
                            })}
                        />

                        <label htmlFor='email' className='form__label'>
                            {errors.email ? errors.email?.message : 'Email'}
                        </label>
                    </div>
                    <div className='form__group'>
                        <ion-icon
                            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                            class='form__input--show-password'
                            onClick={() => setShowPassword(!showPassword)}
                        ></ion-icon>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            id='password'
                            className='form__input form__input--password'
                            placeholder='Password'
                            style={passwordBorderStyle}
                            onChange={() =>
                                setpasswordBorderStyle(
                                    !errors.password
                                        ? { borderBottom: '2px solid  #10ac84' }
                                        : { borderBottom: '2px solid #e44232' }
                                )
                            }
                            ref={register({
                                required: true,
                                minLength: {
                                    value: 8,
                                    message: 'password must contain at least 8 characters',
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'password must not contain more than 20 characters',
                                },
                            })}
                        />
                        <label htmlFor='password' className='form__label'>
                            {errors.password ? errors.password?.message : 'Password'}
                        </label>
                    </div>
                    <button className='btn btn--large btn--red'>Log in</button>
                    <label htmlFor='permanent-login' className='permanent-login'>
                        <input
                            type='checkbox'
                            name='permanent-login'
                            id='permanent-login'
                            className='form__checkbox'
                            ref={register}
                        />
                        <span className='form__checkbox--checked'></span>Keep me logged in
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
