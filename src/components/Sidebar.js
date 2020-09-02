import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// actions
import * as projectActions from './store/actions/projectActions'
import * as taskActions from './store/actions/taskActions'
// components
import Projects from './Projects/Projects'
import {genericsData} from './constanst'

const Sidebar = () => {
    const dispatch = useDispatch()
    const selectedProject = useSelector(state => state.firestore.ordered.projects)

    const changeProject = selectedProject => dispatch(projectActions.changeProject(selectedProject))
    const getProjects = () => dispatch(projectActions.getProjects())
    const getTasks = () => dispatch(taskActions.getTasks())
    const projects = useSelector(state => state.projects.projects)

    useEffect(() => {
        getProjects()
    }, [])

    

    useEffect(() => {
        console.log('Get Tasks')
        getTasks()
    }, [selectedProject, projects])

    
    return (
        <aside className='sidebar'>
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
                {projects.map(pro =>
                    pro.favorite ? (
                        <li
                            className='sidebar__generic--item'
                            id={pro.projectName.replace(/\s/g, '-')}
                            key={pro.id}
                            onClick={() => changeProject(pro.projectName.toLoweCase())}
                        >
                            <span
                                className='project__icon'
                                style={{ backgroundColor: pro.projectColor }}
                            ></span>
                            <span>{pro.projectName}</span>
                        </li>
                    ) : null
                )}
            </ul>
            <div className='sidebar__middle'>
                <Projects sectionName='Projects' projects={projects} />
            </div>
        </aside>
    )
}

export default Sidebar
