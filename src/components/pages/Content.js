import React from 'react'

//components
import Header from '../layout/Header'
import Sidebar from '../Sidebar'
import Tasks from '../Tasks/Tasks'

const Content = () => {
    return (
        <>
            <Header />
            <div className='grid'>
                <Sidebar />
                <Tasks />
            </div>
        </>
    )
}

export default Content
