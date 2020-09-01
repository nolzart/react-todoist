const initState = {
    activeProject: 'inbox',
    projects: [],
}
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_PROJECT':
            console.log(action)
            return {
                activeProject: action.activeProject,
                projects: state.projects.length > 0 ? [...state.projects] : null,
            }
        case 'GET_PROJECTS':
            return {
                activeProject: state.activeProject,
                projects: action.projects,
            }
        case 'ADD_PROJECT':
            console.log(action)
            return {
                ...state,
                projects: [...state.projects, action.newProject],
            }
        case 'UPDATE_PROJECT':
            console.log('UPDATING PROJECT')
            const projectId = state.projects.findIndex(
                project => project.id === action.updatedProject.id
            )
            const updatedProjects = [...state.projects]
            updatedProjects[projectId] = action.updatedProject
            return {
                ...state,
                projects: updatedProjects,
            }
        case 'REMOVE_PROJECT':
            const newProjects = [
                ...state.projects.slice(0, action.projectDeletedId),
                ...state.projects.slice(action.projectDeletedId + 1),
            ]
            return {
                ...state,
                projects: [...newProjects],
            }
        default:
            return state
    }
}

export default projectReducer
