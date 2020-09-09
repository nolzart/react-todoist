import React, { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'
//components
import Modal from '../Modal'
import SelectColor from '../SelectColor'

const AddProject = ({ activeModal, setActiveModal }) => {
    const firestore = useFirestore()
    
    const [inputValues, setInputValues] = useState({
        projectName: '',
        projectColor: '',
        favorite: false,
    })

    const addProject = async () => {
        const newProject = {
            ...inputValues,
            date: new Date(),
            authorFirstName: 'Omar',
            authorLastName: 'Colmenares',
            authorId: 12345,
            archived: false,
        }
        try {
            setActiveModal('')
            await firestore.collection('projects').add(newProject)
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <Modal
            modalTitle='Add Project'
            modalConductor='ADD_PROJECT'
            buttonTitle='Add'
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            showBody={true}
            handleSubmit={addProject}
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

export default AddProject
