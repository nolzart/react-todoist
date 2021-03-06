import React, { useState } from 'react'
import moment from 'moment'

import useTask from '../../hooks/useTask'
import TaskEditor from './TaskEditor'

const AddTask = ({ activeProject, activeModal, setActiveModal }) => {
    const { addTask } = useTask('', activeProject)
    const [currentDate, setCurrentDate] = useState(moment())
    return (
        <>
            <TaskEditor
                activeProject={activeProject}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                modalConductor='ADD_TASK'
                buttonTitle='Add Task'
                handleSubmit={addTask}
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
            />
        </>
    )
}

export default AddTask
