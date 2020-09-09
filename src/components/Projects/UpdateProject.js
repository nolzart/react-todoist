import React, { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
//components
import Modal from '../Modal'
import SelectColor from '../SelectColor'

const UpdateProject = ({ activeModal, setActiveModal, projectId }) => {
    const firestore = useFirestore()
    const [inputValues, setInputValues] = useState({
        projectName: '',
        projectColor: '',
        favorite: false,
    })

    const updateProject = async () => {
        try {
            const projectDoc = await firestore.collection('projects').doc(projectId).get()
            const updatedProject = {
                projectName: inputValues.projectName || projectDoc.data().projectName,
                projectColor: inputValues.projectColor || projectDoc.data().projectColor,
                favorite: inputValues.favorite || projectDoc.data().favorite,
            }
            await firestore.collection('projects').doc(projectId).update(updatedProject)
            setActiveModal('')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <Modal
            modalTitle='Update Project'
            buttonTitle='Update'
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            modalConductor='UPDATE_PROJECT'
            handleSubmit={updateProject}
            showBody={true}
        >
            <form>
                <div className='form__group'>
                    <label htmlFor='project-name' className='modal__form--label'>
                        Project name
                    </label>
                    <input
                        type='text'
                        id='project-name'
                        className='form__input--border'
                        name='projectName'
                        onChange={e =>
                            setInputValues({
                                ...inputValues,
                                [e.target.name]: e.target.value,
                            })
                        }
                        value={inputValues.projectName}
                        required
                    />
                </div>
                <div className='form__group'>
                    <label htmlFor='project-name' className='modal__form--label'>
                        Project color
                    </label>
                    <SelectColor inputValues={inputValues} setInputValues={setInputValues} />
                </div>
                <div className='form__checkbox-switched'>
                    <h1 className='form__checkbox-switched--title'>Favorite</h1>
                    <label htmlFor='favorite' className='form__checkbox-switched--label'>
                        <input
                            type='checkbox'
                            id='favorite'
                            name='favorite'
                            onClick={() =>
                                setInputValues({
                                    ...inputValues,
                                    favorite: !inputValues.favorite,
                                })
                            }
                            className='form__checkbox-switched--input'
                        />
                        <span className='form__checkbox-switched--span'></span>
                        <i className='form__checkbox-switched--indicator'></i>
                    </label>
                </div>
            </form>
        </Modal>
    )
}

export default UpdateProject
