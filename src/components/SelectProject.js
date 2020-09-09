import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const SelectProject = ({ showProjects, setShowProjects, setSelectedProject }) => {
    const projects = useSelector(state => state.firestore.ordered.projects)
    const [options, setOptions] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleSelectedProject = option => {
        setShowProjects(false)
        setInputValue('')
        setSelectedProject({ ...option })
    }

    useEffect(() => {
        let options = []
        options = projects !== undefined && projects.filter(project =>
            project.projectName.toLowerCase().includes(inputValue.toLowerCase())
        )
        setOptions(options)

        if (options.length === 0 && inputValue.length <= 0 && projects) {
            setOptions([...projects])
        }

        if (options.length === 0 && inputValue.length > 0) {
            setOptions([
                {
                    projectName: 'Project not found :(',
                    projectColor: 'gray',
                    id: 'project-not-found',
                },
            ])
        }
    }, [inputValue, showProjects])
    return (
        <div
            className={`drop-menu ${!showProjects ? 'u-display-none' : ''}`}
            style={{ position: 'absolute', top: '-1rem' }}
        >
            <input
                className='drop-menu__filter-option'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <ul className='drop-menu__select active' style={{ height: '9rem' }}>
                {options &&
                    options.map(option => (
                        <li
                            className='drop-menu__option'
                            key={`option-${option.id}`}
                            onClick={() => handleSelectedProject(option)}
                        >
                            <div
                                className='drop-menu__option--icon'
                                style={{
                                    backgroundColor: `${option.projectColor}`,
                                }}
                            ></div>
                            <p>{option.projectName}</p>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default SelectProject
