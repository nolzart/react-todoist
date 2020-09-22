import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
//components
import Header from '../layout/Header'
import Sidebar from '../Sidebar'
import Tasks from '../Tasks/Tasks'

const Content = (props) => {
    const auth = useSelector(state => state.firebase.auth)
    useEffect(() => {
        if(!auth.uid) props.history.push('/')
    }, [auth])
    
    const [activeModal, setActiveModal] = useState('')
    const [activeProject, changeActiveProject] = useState('inbox')
    return (
        <>
            <Header 
                activeModal={activeModal} 
                setActiveModal={setActiveModal} 
                activeProject={activeProject}
                {...props}
            />
            <div className='grid'>
                <Sidebar
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                    activeProject={activeProject}
                    changeActiveProject={changeActiveProject}
                />
                <Tasks
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                    activeProject={activeProject}
                />
            </div>
        </>
    )
}

export default Content
