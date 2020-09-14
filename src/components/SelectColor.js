import React, { useState, useEffect } from 'react'
import { colors } from './constanst'

const SelectColor = ({ inputValues, setInputValues }) => {
    const [showSelect, setShowSelect] = useState(false)
    console.log(inputValues)
    const [selectedColor, setSelectedColor] = useState({ name: 'gray', color: '#b8b8b8' })
    
    // useEffect(() => {
    //     setInputValues({
    //         ...inputValues,
    //         projectColor: selectedColor,
    //     })
        
    // }, [inputValues])

    return (
        <div className='drop-menu' onClick={() => setShowSelect(!showSelect)}>
            <ul className='drop-menu__default-option'>
                <li className='drop-menu__option'>
                    <div
                        className='drop-menu__option--icon'
                        style={{
                            backgroundColor: `${
                                inputValues.projectColor.color
                            }`,
                        }}
                    ></div>
                    <p>{inputValues.projectColor.name}</p>
                </li>
            </ul>
            <ul className={`drop-menu__select ${showSelect ? 'active' : ''}`}>
                {colors.map(color => (
                    <li
                        className='drop-menu__option'
                        key={color.name.toLowerCase()}
                        onClick={() =>
                            setInputValues({
                                ...inputValues,
                                projectColor: {
                                    color: color.color,
                                    name: color.name,
                                },
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
    )
}

export default SelectColor
