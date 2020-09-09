import React, { useState } from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
// components
import Projects from './Projects/Projects'
import ModalConductor from './ModalConductor'
import { genericsData } from './constanst'

const Sidebar = ({ activeModal, setActiveModal, changeActiveProject }) => {
    useFirestoreConnect(['projects'])

    const projects = useSelector(state => state.firestore.ordered.projects)

    const [section, setSection] = useState('')
    const [mouseCoordinates, setMouseCoordinates] = useState({
        top: 0,
        left: 0,
    })

    const [projectId, setProjectId] = useState('')
    const handleMouseContext = e => {
        const id = e.target.id ? e.target.id : e.target.parentNode.id
        setSection(e.target.dataset.menu ? e.target.dataset.menu : e.target.parentNode.dataset.menu)
        if (projects.findIndex(project => project.id === id) !== -1) {
            e.preventDefault()
            console.log(id)
            setMouseCoordinates({
                left: e.clientX + 10,
                top: e.clientY - 100,
            })
            setActiveModal(activeModal === '' ? 'CONTEXT_MENU' : '')
            setProjectId(id)
        }
    }

    return (
        <aside className='sidebar' onContextMenu={handleMouseContext}>
            <ModalConductor
                top={mouseCoordinates.top}
                left={mouseCoordinates.left}
                projectId={projectId}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                section={section}
            />
            <ul className='sidebar__generic u-mb-medium'>
                {genericsData.map(generic => (
                    <li
                        className='sidebar__generic--item'
                        id={generic.id}
                        key={generic.name}
                        onClick={()=> changeActiveProject(generic.id)}
                    >
                        <span className={generic.color}>
                            <ion-icon name={generic.icon} class='sidebar__generic--icon'></ion-icon>
                        </span>
                        <span>{generic.name}</span>
                    </li>
                ))}
                {projects && projects.map(
                    project =>
                        project.favorite && (
                            <li
                                className='sidebar__generic--item'
                                id={project.id}
                                data-menu='favorites'
                                key={project.id}
                                onClick={() => changeActiveProject(project.id)}
                            >
                                <span
                                    className='project__icon'
                                    style={{ backgroundColor: project.projectColor }}
                                ></span>
                                <span>{project.projectName}</span>
                            </li>
                        )
                )}
            </ul>
            <div className='sidebar__middle'>
                <Projects
                    sectionName='Projects'
                    projects={projects}
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                />
            </div>
        </aside>
    )
}

export default Sidebar
