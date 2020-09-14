import React, { useState } from 'react'
import moment from 'moment'

import TaskEditor from './TaskEditor'
import useTask from '../../hooks/useTask'

const QuickAddTask = ({ activeModal, setActiveModal, activeProject }) => {
    const { addTask } = useTask('', activeProject)
    const [currentDate, setCurrentDate] = useState(moment())
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
                <div className='modal__center'>
                    <TaskEditor
                        activeModal={activeModal}
                        modalConductor='QUICK_ADD_TASK'
                        buttonTitle='Quick Add Task'
                        activeProject={activeProject}
                        setActiveModal={setActiveModal}
                        handleSubmit={addTask}
                        currentDate={currentDate}
                        setCurrentDate={setCurrentDate}
                    />
                </div>
            </div>
        </section>
    )
}

export default QuickAddTask
