import React, { useState } from 'react'

import useCalendar from '../../hooks/useCalendar'

import Calendar from '../layout/Calendar'

const AddTask = ({ activeModal, setActiveModal }) => {
    const [
        dateContext,
        days,
        today,
        tomorrow,
        nextWeek,
        prevMonth,
        nextMonth,
        actualMonth,
    ] = useCalendar()
    const [showCalendar, setShowCalendar] = useState(false)
    return (
        <section className={`modal ${activeModal !== 'QUICK_ADD_TASK' && 'u-display-none'}`}>
            <div className='modal__container modal__container--large'>
                <header className='modal__header u-margin-center'>
                    <h3 className='modal__header--title' style={{ fontSize: '1.3rem' }}>
                        Quick Add Task
                    </h3>
                    <span className={`modal__close`} onClick={() => setActiveModal('')}>
                        &times;
                    </span>
                </header>
                <div className='task-editor'>
                    <input
                        type='text'
                        placeholder='e.g design meeting at 11am '
                        className='task-editor__input'
                    />
                    <div className='task-editor__buttons'>
                        <div className='task-editor__buttons--left'>
                            <button
                                className={`task-editor__btn ${showCalendar && 'u-bg-shading'}`}
                                onClick={() => setShowCalendar(!showCalendar)}
                            >
                                Today
                            </button>
                            <div className='task-editor__calendar-container'>
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
                                />
                            </div>
                            <button className='task-editor__btn'>Inbox</button>
                        </div>
                        <div className='task-editor__buttons--right'>
                            <button className='task-editor__btn--right'>
                                <ion-icon
                                    name='bookmark-outline'
                                    class='task-editor__btn--icon'
                                ></ion-icon>
                            </button>
                            <button className='task-editor__btn--right'>
                                <ion-icon
                                    name='flag-outline'
                                    class='task-editor__btn--icon'
                                ></ion-icon>
                            </button>
                            <button className='task-editor__btn--right'>
                                <ion-icon
                                    name='time-outline'
                                    class='task-editor__btn--icon'
                                ></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
                <footer className='modal__footer modal__footer--flex-start'>
                    <button className='modal__btn'>Add Task</button>
                </footer>
            </div>
        </section>
    )
}

export default AddTask
