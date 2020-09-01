export const getTasks = () => async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    try {
        const project = getState().projects.activeProject
        console.log(project)
        const querySnapshot = await firestore
            .collection('tasks')
            .where('projectId', '==', project)
            .get()
        let tasks = []
        querySnapshot.forEach(doc => tasks = [...tasks, {id: doc.id, ...doc.data()}])
        console.log(tasks)
        dispatch({type: 'GET_TASKS', tasks})
    } catch (err) {
        console.log(err)
    }
}
