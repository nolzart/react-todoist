import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

import SingleTask from './SingleTask.js'
import AddTask from './AddTask'

const Tasks = ({ activeProject, activeModal, setActiveModal }) => {
    const currentUser = useSelector(state => state.firebase.auth)
    useFirestoreConnect([
        { collection: 'tasks', where: ['userId', '==', currentUser.uid || 'notUser'] },
    ])
    const allTasks = useSelector(state => state.firestore.ordered.tasks)
    const tasks = allTasks && allTasks.filter(task => task.projectId === activeProject)
    const projects = useSelector(state => state.firestore.data.projects)
    return (
        <section className='tasks'>
            <h1 className='heading-primary tasks__title'>
                {projects && projects[activeProject].projectName}
            </h1>
            <div className='task'>
                <header className='task__header'>
                    <h2 className='task__header--title'>Date</h2>
                    <div className='task__header--options'>Reschedule</div>
                </header>
                {tasks &&
                    tasks.map(task => (
                        <SingleTask
                            {...task}
                            key={task.id}
                            activeModal={activeModal}
                            setActiveModal={setActiveModal}
                            activeProject={activeProject}
                        />
                    ))}
                <button
                    className='projects__inner--btn'
                    onClick={() => (activeModal ? setActiveModal('') : setActiveModal('ADD_TASK'))}
                >
                    <span className='projects__inner--icon'>+</span>
                    <p>Add Task</p>
                </button>
                <AddTask
                    activeProject={activeProject}
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                />
            </div>
        </section>
    )
}

export default Tasks
