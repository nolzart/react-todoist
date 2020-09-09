import React, { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
import useCalendar from '../../hooks/useCalendar'
import Calendar from '../layout/Calendar'
import SelectProject from '../SelectProject'


const AddTask = ({ showAddTask, setShowAddTask }) => {
    const [
        dateContext,
        days,
        today,
        tomorrow,
        nextWeek,
        prevMonth,
        nextMonth,
        actualMonth,
        selectDay,
    ] = useCalendar()
    const firestore = useFirestore()
    const [showCalendar, setShowCalendar] = useState(false)
    const [showProjects, setShowProjects] = useState(false)

    const [selectedProject, setSelectedProject] = useState({
        id: 'inbox',
        projectName: 'Inbox',
        projectColor: 'gray',
    })
    const [inputValue, setInputValue] = useState('')

    const addTask = async () => {
        try {
            await firestore.collection('tasks').add({
                task: inputValue,
                projectId: selectedProject.id,
                date: new Date(dateContext),
                projectName: selectedProject.projectName,
            })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className={`add-task ${!showAddTask ? 'u-display-none' : ''}`}>
            <div className='task-editor'>
                <input
                    type='text'
                    placeholder='e.g design meeting at 11am '
                    className='task-editor__input'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <div className='task-editor__buttons'>
                    <div className='task-editor__buttons--left'>
                        <button
                            className={`task-editor__btn ${showCalendar && 'u-bg-shading'}`}
                            onClick={() => setShowCalendar(!showCalendar)}
                        >
                            Today
                        </button>
                        <div
                            className='task-editor__select-container'
                            style={{ top: '-20rem', left: '-25rem' }}
                        >
                            <Calendar
                                dateContext={dateContext}
                                days={days}
                                today={today}
                                tomorrow={tomorrow}
                                nextWeek={nextWeek}
                                prevMonth={prevMonth}
                                nextMonth={nextMonth}
                                actualMonth={actualMonth}
                                showCalendar={showCalendar}
                                selectDay={selectDay}
                            />
                        </div>
                        <button
                            className='task-editor__btn'
                            onClick={() => setShowProjects(!showProjects)}
                        >
                            {!selectedProject.projectName ? 'Inbox' : selectedProject.id}
                        </button>
                        <div style={{ width: '27rem' }} className='task-editor__select-container'>
                            <SelectProject
                                showProjects={showProjects}
                                setShowProjects={setShowProjects}
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
            <button className='modal__btn' onClick={addTask}>
                Add Task
            </button>
            <button className='btn--outline' onClick={() => setShowAddTask(false)}>
                Cancel
            </button>
        </div>
    )
}

export default AddTask
