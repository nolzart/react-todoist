import React from 'react'

//components
import Header from '../layout/Header'
import Sidebar from '../Sidebar'
import Editor from '../Tasks'

const AppPage = () => {
    return (
        <>
            <Header />
            <div className="grid">
                <Sidebar />
                <Editor />
            </div>
        </>
    )
}

export default AppPage
