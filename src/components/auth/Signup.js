import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'

const Signup = props => {
    const {signInWithGoogle, signInWithFacebook} = useAuth()
    
    const { register, handleSubmit, errors } = useForm({ mode: 'onChange' })
    const [emailBorderStyle, setemailBorderStyle] = useState({
        borderBottom: '2px solid rgb(117, 113, 113)',
    })
    const onSubmit = ({ email }) => props.history.push('/signup/step_two', { email })
    return (
        <section className='login'>
            <div className='login__container'>
                <Link className='login__container--logo' to='/'>
                    <img src='img/logo.png' alt='Todoist Logo' />
                    <h2>todoist</h2>
                </Link>
                <h2 className='heading-secondary'>Sign up</h2>
                <span className='login__container--link' onClick={signInWithGoogle}>
                    <img src='img/google-color.svg' alt='Google icon' /> Continue with Google
                </span>
                <span className='login__container--link' onClick={signInWithFacebook}>
                    <img src='img/facebook-square-color.svg' alt='Google icon' /> Continue with
                    Facebook
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
                            Email
                        </label>
                    </div>
                    <button className='btn btn--large btn--red'>
                        <span className='u-color-white'>Sign up with email</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Signup
