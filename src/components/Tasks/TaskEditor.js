import React, { useState } from 'react'
import moment from 'moment'

import useTask from '../../hooks/useTask'
import Calendar from '../layout/Calendar'
import SelectProject from '../SelectProject'

const TaskEditor = ({
    buttonTitle,
    activeModal,
    modalConductor,
    setActiveModal,
    handleSubmit,
    taskId,
    activeProject,
    currentDate,
    setCurrentDate,
}) => {
    const [showOption, setShowOption] = useState('')

    const { selectedProject, setSelectedProject, taskContent, setTaskContent } = useTask(
        taskId,
        activeProject
    )
    const handleClick = (currentDate, taskContent, selectedProject) => {
        if (activeModal !== 'ADD_TASK') setActiveModal('')
        console.log(selectedProject)
        handleSubmit(currentDate, taskContent, selectedProject)
    }
    return (
        <div className={`add-task ${activeModal !== modalConductor ? 'u-display-none' : ''}`}>
            <div className='task-editor' onClick={() => showOption && setShowOption('')}>
                <input
                    type='text'
                    placeholder='e.g design meeting at 11am '
                    className='task-editor__input'
                    value={taskContent}
                    onChange={e => setTaskContent(e.target.value)}
                />
                <div className='task-editor__buttons'>
                    <div className='task-editor__buttons--left'>
                        <button
                            className={`task-editor__btn ${
                                showOption === 'calendar' ? 'u-bg-shading' : ''
                            }`}
                            onClick={() => setShowOption('calendar')}
                        >
                            {moment(currentDate.toDate()).format('MMM DD') ===
                            moment(new Date()).format('MMM DD')
                                ? 'Today'
                                : moment(currentDate.toDate()).format('MMM DD')}
                        </button>
                        <div
                            className='task-editor__select-container'
                            style={{ top: '-20rem', left: '-25rem' }}
                        >
                            <Calendar
                                showOption={showOption}
                                currentDate={currentDate}
                                setCurrentDate={setCurrentDate}
                            />
                        </div>
                        <button
                            className='task-editor__btn'
                            onClick={() => setShowOption('select_project')}
                        >
                            {selectedProject && selectedProject.projectName}
                        </button>
                        <div style={{ width: '27rem' }} className='task-editor__select-container'>
                            <SelectProject
                                showOption={showOption}
                                setShowOption={setShowOption}
                                setSelectedProject={setSelectedProject}
                            />
                        </div>
                    </div>
                    <div className='task-editor__buttons--right'>
                        <button className='task-editor__btn--right'>
                            <ion-icon
                                name='bookmark-outline'
                                class='task-editor__btn--icon'
                            ></ion-icon>
                        </button>
                        <button className='task-editor__btn--right'>
                            <ion-icon name='flag-outline' class='task-editor__btn--icon'></ion-icon>
                        </button>
                        <button className='task-editor__btn--right'>
                            <ion-icon name='time-outline' class='task-editor__btn--icon'></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
            <button
                className={`modal__btn `}
                onClick={() => handleClick(currentDate, taskContent, selectedProject)}
            >
                {buttonTitle}
            </button>
            <button
                className={`btn--outline ${
                    activeModal === 'QUICK_ADD_TASK' ? 'u-display-none' : ''
                }`}
                onClick={() => setActiveModal('')}
            >
                Cancel
            </button>
        </div>
    )
}

export default TaskEditor
