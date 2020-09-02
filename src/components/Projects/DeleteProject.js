import React from 'react'
import { useDispatch } from 'react-redux'
//actions
import * as projectActions from '../store/actions/projectActions'
//components
import Modal from '../Modal'
const DeleteProject = ({ projectId, activeModal, setActiveModal }) => {
    const dispatch = useDispatch()
    const deleteProject = id => dispatch(projectActions.deleteProject(id))
    const handleClick = () => {
        deleteProject(projectId)
        setActiveModal('')
    }
    console.log(activeModal)
    return (
        <>
            <Modal
                modalTitle='Are you sure you want to delete PROJECTNAME?'
                buttonTitle='Delete'
                handleClick={handleClick}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                showBody={false}
                modalConductor='DELETE_PROJECT'
            />
        </>
    )
}

export default DeleteProject
