import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
//actions
import * as projectActions from '../store/actions/projectActions'
//components
import Modal from '../Modal'
import SelectColor from '../SelectColor'

const AddProject = ({ activeModal, setActiveModal }) => {
    const dispatch = useDispatch()
    const addProject = project => dispatch(projectActions.addProject(project))
    const [inputValues, setInputValues] = useState({
        projectName: '',
        projectColor: '',
        favorite: false,
    })

    const handleSubmit = () => {
        setActiveModal('')
        addProject(inputValues)
    }
    return (
        <Modal
            modalTitle='Add Project'
            modalConductor='ADD_PROJECT'
            buttonTitle='Add'
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            showBody={true}
            handleSubmit={handleSubmit}
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
