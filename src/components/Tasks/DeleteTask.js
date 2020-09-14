import React from 'react'

//hooks
import useTask from '../../hooks/useTask'
//components
import Modal from '../Modal'
const DeleteTask = ({ taskId, activeModal, setActiveModal }) => {
    const { deleteTask } = useTask(taskId)
    return (
        <>
            <Modal
                modalTitle='Are you sure you want to delete this task?'
                buttonTitle='Delete'
                handleSubmit={deleteTask}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                showBody={false}
                modalConductor={`DELETE_TASK-${taskId}`}
            />
        </>
    )
}
export default DeleteTask
