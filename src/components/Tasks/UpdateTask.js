import React, { useState } from 'react'
import moment from 'moment'

import useTask from '../../hooks/useTask'
import TaskEditor from './TaskEditor'

const UpdateTask = ({ taskId, activeProject, activeModal, setActiveModal, date }) => {
    const { updateTask } = useTask(taskId, activeProject)
    const [currentDate, setCurrentDate] = useState(moment(date.toDate()))
    return (
        <>
            <TaskEditor
                activeProject={activeProject}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                modalConductor={`UPDATE_TASK${taskId}`}
                buttonTitle='Update Task'
                handleSubmit={updateTask}
                taskId={taskId}
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
            />
        </>
    )
}

export default UpdateTask
