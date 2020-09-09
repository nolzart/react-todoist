import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import Task from './SingleTask.js'
import AddTask from './AddTask'

const Tasks = ({activeProject}) => {
    useFirestoreConnect(['tasks'])
    const allTasks = useSelector(state => state.firestore.ordered.tasks)
    const tasks = allTasks && allTasks.filter(task => task.projectId === activeProject)

    const [showAddTask, setShowAddTask] = useState(false)

    return (
        <section className='tasks'>
            <h1 className='heading-primary tasks__title'>Default</h1>
            <div className='task'>
                <header className='task__header'>
                    <h2 className='task__header--title'>Date</h2>
                    <div className='task__header--options'>Reschedule</div>
                </header>
                {tasks  && tasks.map(task => <Task {...task} key={task.id} />)}
                <button
                    className='projects__inner--btn'
                    onClick={() => setShowAddTask(!showAddTask)}
                >
                    <span className='projects__inner--icon'>+</span>
                    <p>Add Task</p>
                </button>
                <AddTask showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
            </div>
        </section>
    )
}

export default Tasks
