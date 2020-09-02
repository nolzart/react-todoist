import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// actions
import * as projectActions from './store/actions/projectActions'
import * as taskActions from './store/actions/taskActions'
// components
import Projects from './Projects/Projects'
import ModalConductor from './ModalConductor'
import { genericsData } from './constanst'

const Sidebar = () => {
    const dispatch = useDispatch()
    const selectedProject = useSelector(state => state.firestore.ordered.projects)

    const changeProject = selectedProject => dispatch(projectActions.changeProject(selectedProject))
    const getProjects = () => dispatch(projectActions.getProjects())
    const getTasks = () => dispatch(taskActions.getTasks())
    const projects = useSelector(state => state.projects.projects)

    const [activeModal, setActiveModal] = useState('')
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

    useEffect(() => {
        getProjects()
    }, [])

    useEffect(() => {
        console.log('Get Tasks')
        getTasks()
    }, [selectedProject, projects])

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
                        id={generic.projectId}
                        key={generic.name}
                        onClick={e => changeProject(generic.projectId)}
                    >
                        <span className={generic.color}>
                            <ion-icon name={generic.icon} class='sidebar__generic--icon'></ion-icon>
                        </span>
                        <span>{generic.name}</span>
                    </li>
                ))}
                {projects.map(project =>
                    project.favorite && (
                        <li
                            className='sidebar__generic--item'
                            id={project.id}
                            data-menu='favorites'
                            key={project.id}
                            onClick={() => changeProject(project.projectName.toLoweCase())}
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
