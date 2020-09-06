import React from 'react'

import ContextMenu from './ContextMenu'

import AddProject from './Projects/AddProject'
import UpdateProject from './Projects/UpdateProject'
import DeleteProject from './Projects/DeleteProject'

import AddTask from './Tasks/AddTask'

const ModalConductor = props => {
    switch (props.activeModal) {
        case 'CONTEXT_MENU':
            return <ContextMenu {...props} />
        case 'ADD_PROJECT':
            return <AddProject {...props} />
        case 'UPDATE_PROJECT':
            return <UpdateProject {...props}/>
        case 'DELETE_PROJECT':
            return <DeleteProject {...props} />
        case 'QUICK_ADD_TASK':
            console.log('active modal works!')
            return <AddTask {...props} />
        default:
            return null
    }
}

export default ModalConductor
