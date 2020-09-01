import React from 'react'
import { useDispatch } from 'react-redux'
//actions
import * as projectActions from '../store/actions/projectActions'

const DeleteProject = ({ show, setShow, projectId }) => {
    const dispatch = useDispatch()
    const deleteProject = id => dispatch(projectActions.deleteProject(id))
    const handleClick = () => {
        deleteProject(projectId)
        setShow({...show, showDeleteProject: false})
    }
    return (
        <div className={`modal ${show.showDeleteProject === false  ? 'u-display-none' : ''}`}>
            <div className='modal__container'>
                <section className='modal__header'>
                    <p>
                        Are you sure you want to delete <b>PROJECTNAME</b>?
                    </p>
                </section>
                <footer className='modal__footer'>
                    <button
                        className='modal__btn--cancel'
                        onClick={() =>
                            setShow({
                                ...show,
                                showDeleteProject: !show.showDeleteProject,
                            })
                        }
                    >
                        Cancel
                    </button>
                    <button className='modal__btn' onClick={handleClick}>
                        Delete
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default DeleteProject
