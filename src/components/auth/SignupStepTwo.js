import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'

const SignupStepTwo = props => {
    const { createUserWithEmail } = useAuth()
    const email = props.history.location.state.email
    const [showPassword, setShowPassword] = useState(false)
    const { handleSubmit, register, errors, reset } = useForm({ mode: 'onChange' })

    const onSubmit = data => {
        const user = {
            email,
            ...data,
        }
        createUserWithEmail(user)
        reset()
        user.permanentLogin ? props.history.push('/app') : props.history.push('/login')
    }

    const [usernameBorderStyle, setUsernameBorderStyle] = useState({
        borderBottom: '2px solid rgb(117, 113, 113)',
    })
    const [passwordBorderStyle, setpasswordBorderStyle] = useState({
        borderBottom: '2px solid rgb(117, 113, 113)',
    })
    return (
        <section className='login'>
            <div className='login__container'>
                <Link className='login__container--logo' to='/'>
                    <img src='../img/logo.png' alt='Todoist Logo' />
                    <h2>todoist</h2>
                </Link>
                <h2 className='heaindg-secondary u-mb-small-2'>¡Ya casi terminas!</h2>
                <h3 className='heading-tertiary' style={{ color: 'rgb(117, 113, 113)' }}>
                    {email}
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form__group'>
                        <input
                            type='text'
                            className='form__input'
                            name='username'
                            id='username'
                            placeholder='Your Name'
                            ref={register({ required: 'Required' })}
                            style={usernameBorderStyle}
                            onChange={() =>
                                setUsernameBorderStyle(
                                    !errors.password
                                        ? { borderBottom: '2px solid  #10ac84' }
                                        : { borderBottom: '2px solid #e44232' }
                                )
                            }
                        />
                        <label htmlFor='username' className='form__label'>
                            {errors.username ? errors.username.message : 'Your name'}
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
                            className='form__input'
                            name='password'
                            id='password'
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
                            {errors.password ? errors.password.message : 'Password'}
                        </label>
                    </div>
                    <button className='btn btn--large btn--red'>
                        <span className='u-color-white'>Sign up now</span>
                    </button>
                    <label htmlFor='permanentLogin' className='permanent-login'>
                        <input
                            type='checkbox'
                            name='permanentLogin'
                            id='permanentLogin'
                            className='form__checkbox'
                            ref={register}
                        />
                        <span className='form__checkbox--checked'></span>Keep me logged in?
                    </label>
                    <hr />
                    <div className='help-block'>
                        <Link to='/login'>
                            Are you already registered? <span>Log in</span>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignupStepTwo
