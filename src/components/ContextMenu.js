import React from 'react'
import { useFirestore } from 'react-redux-firebase'

const ContextMenu = ({ top, left, projectId, activeModal, setActiveModal, section }) => {
    const firestore = useFirestore()
    const updateProject = async ({
        projectName = null,
        projectColor = null,
        favorite = null,
        archived = null,
    }) => {
        try {
            const projectDoc = await firestore.collection('projects').doc(projectId).get()
            const updatedProject = {
                ...projectDoc.data(),
                projectName: projectName ?? projectDoc.data().projectName,
                projectColor: projectColor ?? projectDoc.data().projectColor,
                favorite: favorite ?? projectDoc.data().favorite,
                archived: archived ?? projectDoc.data().archived,
            }
            await firestore.collection('projects').doc(projectId).update(updatedProject)
            setActiveModal('')
        } catch (err) {
            console.log(err)
        }
    }
    if (section === 'favorites') {
        return (
            <div className={`context-menu ${activeModal !== 'CONTEXT_MENU' && 'u-display-none'}`}>
                <div
                    className='context-menu__container'
                    style={{ top: `${top}px`, left: `${left}px` }}
                >
                    <div
                        className='context-menu__item'
                        onClick={() => setActiveModal('UPDATE_PROJECT')}
                    >
                        <span className='context-menu__item--icon'>
                            <ion-icon name='pencil-outline'></ion-icon>
                        </span>
                        <span className='context-menu__item--text'>Edit</span>
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
                </div>
            </div>
        )
    } else if (section === 'archived') {
        return (
            <div className={`context-menu ${activeModal !== 'CONTEXT_MENU' && 'u-display-none'}`}>
                <div
                    className='context-menu__container'
                    style={{ top: `${top}px`, left: `${left}px` }}
                >
                    <div className='context-menu__item'>
                        <span
                            className='context-menu__item--icon'
                            style={{ transform: 'rotate(180deg)' }}
                        >
                            <ion-icon name='archive-outline'></ion-icon>
                        </span>
                        <span
                            className='context-menu__item--text'
                            onClick={() => updateProject(projectId, null, false)}
                        >
                            Unarchive project
                        </span>
                    </div>
                    <div
                        className='context-menu__item'
                        onClick={() => setActiveModal('DELETE_PROJECT')}
                    >
                        <span className='context-menu__item--icon'>
                            <ion-icon name='trash-outline'></ion-icon>
                        </span>
                        <span className='context-menu__item--text'>Delete project</span>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`context-menu ${activeModal !== 'CONTEXT_MENU' && 'u-display-none'}`}>
                <div
                    className='context-menu__container'
                    style={{ top: `${top}px`, left: `${left}px` }}
                >
                    <div className='context-menu__item'>
                        <span className='context-menu__item--icon'>&uarr;</span>
                        <span className='context-menu__item--text'>Add project above</span>
                    </div>
                    <div className='context-menu__item'>
                        <span className='context-menu__item--icon'>&darr;</span>
                        <span className='context-menu__item--text'>Add project below</span>
                    </div>
                    <div className='context-menu__separator'></div>
                    <div
                        className='context-menu__item'
                        onClick={() => setActiveModal('UPDATE_PROJECT')}
                    >
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
                    <div className='context-menu__separator'></div>
                    <div className='context-menu__item'>
                        <span className='context-menu__item--icon'>
                            <ion-icon name='archive-outline'></ion-icon>
                        </span>
                        <span
                            className='context-menu__item--text'
                            onClick={() => updateProject(projectId, null, true)}
                        >
                            Archive project
                        </span>
                    </div>
                    <div
                        className='context-menu__item'
                        onClick={() => setActiveModal('DELETE_PROJECT')}
                    >
                        <span className='context-menu__item--icon'>
                            <ion-icon name='trash-outline'></ion-icon>
                        </span>
                        <span className='context-menu__item--text'>Delete project</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContextMenu
