import React from 'react'
import useProject from '../../hooks/useProject'
//components
import Modal from '../Modal'
const DeleteProject = ({ projectId, activeModal, setActiveModal }) => {
    const { deleteProject } = useProject(projectId)
    return (
        <>
            <Modal
                modalTitle='Are you sure you want to delete PROJECTNAME?'
                buttonTitle='Delete'
                handleSubmit={deleteProject}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                showBody={false}
                modalConductor='DELETE_PROJECT'
            />
        </>
    )
}

export default DeleteProject
