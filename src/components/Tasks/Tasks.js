import React from 'react'
import { useSelector } from 'react-redux'
import Task from './SingleTask.js'

const Tasks = () => {
    const selectedProject = useSelector(state => state.project)
    const tasks = useSelector(state => state.task)
    
    return (
        <section className='tasks'>
            <h1 className='heading-primary tasks__title'>{selectedProject}</h1>
            <div className='task'>
                <header className='task__header'>
                    <h2 className='task__header--title'>Date</h2>
                    <div className='task__header--options'>Reschedule</div>
                </header>
                {tasks && tasks.map(task => <Task {...task} key={task.id}/>)}
            </div>
        </section>
    )
}

export default Tasks
