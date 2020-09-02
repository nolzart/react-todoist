import React from 'react'

import ContextMenu from './ContextMenu'
import AddProject from './Projects/AddProject'
import UpdateProject from './Projects/UpdateProject'
import DeleteProject from './Projects/DeleteProject'

const ModalConductor = props => {
    console.log(props.activeModal)
    switch (props.activeModal) {
        case 'CONTEXT_MENU':
            return <ContextMenu {...props} />
        case 'ADD_PROJECT':
            return <AddProject {...props} />
        case 'UPDATE_PROJECT':
            return <UpdateProject {...props}/>
        case 'DELETE_PROJECT':
            return <DeleteProject {...props} />
        default:
            return null
    }
}

export default ModalConductor
