import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
//actions
import * as projectActions from '../store/actions/projectActions'   
//components
import Modal from '../Modal'
import SelectColor from '../SelectColor'

const UpdateProject = ({ activeModal, setActiveModal, projectId }) => {
    const dispatch = useDispatch()
    const updateProject = project =>
        dispatch(projectActions.updateProject({ ...project, projectId }))
        
    const [inputValues, setInputValues] = useState({
        projectName: '',
        projectColor: '',
        favorite: false,
    })

    const handleSubmit = () => {
        setActiveModal('')
        updateProject(inputValues)
    }
    return (
        <Modal
            modalTitle='Update Project'
            buttonTitle='Update'
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            modalConductor='UPDATE_PROJECT'
            handleSubmit={handleSubmit}
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
                    <SelectColor
                        inputValues={inputValues}
                        setInputValues={setInputValues}
                    />
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
