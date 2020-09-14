import React from 'react'
// hooks
import useProject from '../../hooks/useProject'
// components
import Modal from '../Modal'
import SelectColor from '../SelectColor'

const UpdateProject = ({ activeModal, setActiveModal, projectId }) => {
    const { inputValues, setInputValues, updateProject } = useProject(projectId)
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
                            className='form__checkbox-switched--input'
                            defaultChecked={inputValues.favorite ? true : false}
                            onClick={() =>
                                setInputValues({
                                    ...inputValues,
                                    favorite: !inputValues.favorite,
                                })
                            }
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
