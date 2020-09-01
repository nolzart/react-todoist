import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
//actions
import * as projectActions from '../store/actions/projectActions'

const AddProject = ({ show, setShow }) => {
    const colors = [
        { name: 'Berry Red', color: '#b8255f' },
        { name: 'Red', color: '#db4035' },
        { name: 'Orange', color: '#ff9933' },
        { name: 'Yellow', color: '#fad000' },
        { name: 'Olive Green', color: '#adb83b' },
        { name: 'Lime Green', color: '#7ecc49' },
        { name: 'Green', color: '#299438' },
        { name: 'Mint Green', color: '#6accbc' },
        { name: 'Teal', color: '#158fad' },
        { name: 'Sky Blue', color: '#14aaf5' },
        { name: 'Blue', color: '#4073ff' },
        { name: 'Grape', color: '#884dff' },
        { name: 'Violet', color: '#af38eb' },
        { name: 'Lavender', color: '#eb96eb' },
        { name: 'Magenta', color: '#e05194' },
        { name: 'Salmon', color: '#ff8d85' },
        { name: 'Charcoal', color: '#808080' },
        { name: 'Grey', color: '#b8b8b8' },
        { name: 'Taupe', color: '#cc4c93' },
    ]
    const dispatch = useDispatch()
    const addProject = project => dispatch(projectActions.addProject(project))

    const [showSelect, setShowSelect] = useState(false)
    const [selectedColor, setSelectedColor] = useState({
        name: 'Grey',
        color: '#b8b8b8',
    })
    const [inputValues, setInputValues] = useState({
        projectName: '',
        projectColor: '',
        favorite: false,
    })

    const handleSubmit = e => {
        // e.preventDefault()
        setShow({ ...show, showAddProject: false })
        addProject(inputValues)
    }

    useEffect(() => {
        setInputValues({
            ...inputValues,
            projectColor: selectedColor.color,
        })
    }, [selectedColor])

    return (
        <section className={`modal ${!show.showAddProject ? 'u-display-none' : ''}`}>
            <div className='modal__container'>
                <header className='modal__header'>
                    <h3 className='modal__header--title'>Add project</h3>
                </header>
                <form className='modal__body'>
                    <div className='form__group'>
                        <label htmlFor='project-name' className='modal__form--label'>
                            Project name
                        </label>
                        <input
                            type='text'
                            id='project-name'
                            className='form__input--border'
                            name='projectName'
                            onChange={e =>
                                setInputValues({
                                    ...inputValues,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            value={inputValues.projectName}
                            required
                        />
                    </div>
                    <div className='form__group'>
                        <label htmlFor='project-name' className='modal__form--label'>
                            Project color
                        </label>
                        <div
                            className='drop-menu'
                            onClick={() => setShowSelect(!showSelect)}
                        >
                            <ul className='drop-menu__default-option'>
                                <li className='drop-menu__option'>
                                    <div
                                        className='drop-menu__option--icon'
                                        style={{
                                            backgroundColor: `${selectedColor.color}`,
                                        }}
                                    ></div>
                                    <p>{selectedColor.name}</p>
                                </li>
                            </ul>
                            <ul
                                className={`drop-menu__select ${
                                    showSelect ? 'active' : ''
                                }`}
                            >
                                {colors.map(color => (
                                    <li
                                        className='drop-menu__option'
                                        key={color.name.toLowerCase()}
                                        onClick={() =>
                                            setSelectedColor({
                                                color: color.color,
                                                name: color.name,
                                            })
                                        }
                                    >
                                        <div
                                            className='drop-menu__option--icon'
                                            style={{
                                                backgroundColor: `${color.color}`,
                                            }}
                                        ></div>
                                        <p>{color.name}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='form__checkbox-switched'>
                        <h1 className='form__checkbox-switched--title'>Favorite</h1>
                        <label
                            htmlFor='favorite'
                            className='form__checkbox-switched--label'
                        >
                            <input
                                type='checkbox'
                                id='favorite'
                                name='favorite'
                                onClick={() =>
                                    setInputValues({
                                        ...inputValues,
                                        favorite: !inputValues.favorite,
                                    })
                                }
                                className='form__checkbox-switched--input'
                            />
                            <span className='form__checkbox-switched--span'></span>
                            <i className='form__checkbox-switched--indicator'></i>
                        </label>
                    </div>
                </form>
                <footer className='modal__footer'>
                    <button
                        className='modal__btn--cancel'
                        onClick={() =>
                            setShow({ ...show, showAddProject: !show.showAddProject })
                        }
                    >
                        Cancel
                    </button>
                    <button className='modal__btn' onClick={handleSubmit}>
                        Add
                    </button>
                </footer>
            </div>
        </section>
    )
}

export default AddProject
