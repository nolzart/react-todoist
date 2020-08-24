import React from 'react'

import Task from './Task.js'

const Tasks = () => {
    return (
        <section className='tasks'>
            <h1 className='heading-primary tasks__title'>Today</h1>
            <div className='task'>
                <header className='task__header'>
                    <h2 className='task__header--title'>Date</h2>
                    <div className='task__header--options'>
                        Reschedule
                    </div>
                </header>
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        </section>
    )
}

export default Tasks
