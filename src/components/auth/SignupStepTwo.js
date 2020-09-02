import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const SignupStepTwo = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <section className='login'>
            <div className='login__container'>
                <Link className='login__container--logo' to='/'>
                    <img src='../img/logo.png' alt='Todoist Logo' />
                    <h2>todoist</h2>
                </Link>
                <h2 className='heaindg-secondary u-mb-small-2'>
                    ¡Ya casi terminas!
                </h2>
                <form>
                    <div className='form__group'>
                        <input
                            type='text'
                            className='form__input'
                            name='username'
                            id='username'
                            placeholder='Your Name'
                            pattern='^[A-Za-z0-9 _]*$'
                            required
                        />
                        <label htmlFor='username' className='form__label'>
                            Your name
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
                            pattern='^[a-zA-Z0-9%=$]{8,20}$'
                            placeholder='Password'
                            required
                        />
                        <label htmlFor='password' className='form__label'>
                            Password
                        </label>
                    </div>
                    <button className='btn btn--large btn--red'>
                        <Link className='u-color-white' to='/'>
                            Sign up now
                        </Link>
                    </button>
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
                        logged in?
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
