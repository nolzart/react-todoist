import React  from 'react'
import { useDispatch } from 'react-redux'
//actions
import * as projectActions from './store/actions/projectActions'
//components


const ContextMenu = ({ show, setShow, top, left, projectId }) => {
    const dispatch = useDispatch()

    const updateProject = (
        id,
        favorite = null,
        archived = null,
        projectName = null,
        projectColor = null
    ) => dispatch(projectActions.updateProject(id, favorite, archived, projectName, projectColor))
    
    return (
        <div
            className={`context-menu ${!show.showContextMenu ? 'u-display-none' : ''}`}
            // onClick={() => setShow({ ...show, showContextMenu: false })}
        >
            <div className='context-menu__container' style={{ top: `${top}px`, left: `${left}px` }}>
                <div className='context-menu__item'>
                    <span className='context-menu__item--icon'>&uarr;</span>
                    <span className='context-menu__item--text'>Add project above</span>
                </div>
                <div className='context-menu__item'>
                    <span className='context-menu__item--icon'>&darr;</span>
                    <span className='context-menu__item--text'>Add project below</span>
                </div>
                <div className='context-menu__separator'></div>
                <div className='context-menu__item'>
                    <span className='context-menu__item--icon'>
                        <ion-icon name='pencil-outline'></ion-icon>
                    </span>
                    <span className='context-menu__item--text'>Edit</span>
                </div>
                <div className='context-menu__item'>
                    <span className='context-menu__item--icon'>
                        <ion-icon name='heart-outline'></ion-icon>
                    </span>
                    <span
                        className='context-menu__item--text'
                        onClick={() => updateProject(projectId, true)}
                    >
                        Add to favorites
                    </span>
                </div>
                <div className='context-menu__item'>
                    <span className='context-menu__item--icon'>
                        <ion-icon name='heart-dislike-outline'></ion-icon>
                    </span>
                    <span
                        className='context-menu__item--text'
                        onClick={() => updateProject(projectId, false)}
                    >
                        Remove from favorites
                    </span>
                </div>
                <div className='context-menu__separator'></div>
                <div className='context-menu__item'>
                    <span className='context-menu__item--icon'>
                        <ion-icon name='archive-outline'></ion-icon>
                    </span>
                    <span
                        className='context-menu__item--text'
                        onClick={() => updateProject(projectId, null, true)}
                    >
                        Archive
                    </span>
                </div>
                <div
                    className='context-menu__item'
                    onClick={() => setShow({...show, showDeleteProject: !show.showDeleteProject, showContextMenu: false})}
                >
                    <span className='context-menu__item--icon'>
                        <ion-icon name='trash-outline'></ion-icon>
                    </span>
                    <span className='context-menu__item--text'>Delete</span>
                </div>
            </div>
        </div>
    )
}

export default ContextMenu
