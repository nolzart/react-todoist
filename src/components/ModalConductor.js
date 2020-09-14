import React from 'react'

import ContextMenu from './ContextMenu'

import AddProject from './Projects/AddProject'
import UpdateProject from './Projects/UpdateProject'
import DeleteProject from './Projects/DeleteProject'

import QuickAddTask from './Tasks/QuickAddTask'
import DeleteTask from './Tasks/DeleteTask'

const ModalConductor = props => {
    const taskId = props.activeModal.split('-')[1]
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
            return <QuickAddTask {...props} />
        case `DELETE_TASK-${taskId}`:
            return <DeleteTask {...props} taskId={taskId}/>
        default:
            return null
    }
}

export default ModalConductor
