const taskReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_TASKS':
            console.log(action.tasks)
            return action.tasks
        default:
            return state
    }
}

export default taskReducer