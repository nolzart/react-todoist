import React from 'react'
import { useFirestore } from 'react-redux-firebase'
//components
import Modal from '../Modal'
const DeleteProject = ({ projectId, activeModal, setActiveModal }) => {
    const firestore = useFirestore()
    const deleteProject = async () => {
        try {
            setActiveModal('')
            await firestore.collection('projects').doc(projectId).delete()
        } catch(err) {
            console.log(err)
        }
    }
    console.log(activeModal)
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
