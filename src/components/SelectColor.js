import React,{useState, useEffect} from 'react'
import { colors } from './constanst'

const SelectColor = ({inputValues, setInputValues}) => {

    const [showSelect, setShowSelect] = useState(false)
    const [selectedColor, setSelectedColor] = useState({
        name: 'Grey',
        color: '#b8b8b8',
    })

    useEffect(() => {
        setInputValues({
            ...inputValues,
            projectColor: selectedColor.color,
        })
    }, [selectedColor])

    return (
        <div className='drop-menu' onClick={() => setShowSelect(!showSelect)}>
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
            <ul className={`drop-menu__select ${showSelect ? 'active' : ''}`}>
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
    )
}

export default SelectColor
