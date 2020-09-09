import React, { useState } from 'react'

//components
import Header from '../layout/Header'
import Sidebar from '../Sidebar'
import Tasks from '../Tasks/Tasks'

const Content = () => {
    const [activeModal, setActiveModal] = useState('')
    const [activeProject, changeActiveProject] = useState('inbox')
    return (
        <>
            <Header activeModal={activeModal} setActiveModal={setActiveModal} />
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
