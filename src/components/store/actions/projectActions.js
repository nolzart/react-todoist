export const addProject = project => async (dispatch, getState, { getFirestore }) => {
    console.log('adding project')
    const firestore = getFirestore()
    try {
        const newProject = {
            ...project,
            date: new Date(),
            authorFirstName: 'Omar',
            authorLastName: 'Colmenares',
            authorId: 12345,
            archived: false,
        }
        const snapshot = await firestore.collection('projects').add(newProject)

        dispatch({
            type: 'ADD_PROJECT',
            newProject: { ...newProject, id: snapshot.id },
        })
    } catch (err) {
        console.log(err.message)
    }
}

export const getProjects = () => async (dispatch, getState, { getFirestore }) => {
    console.log('geting project')
    const firestore = getFirestore()
    try {
        const querySnapshot = await firestore.collection('projects').get()
        let projects = []
        console.log(querySnapshot)
        querySnapshot.forEach(doc => (projects = [...projects, { ...doc.data(), id: doc.id }]))
        dispatch({ type: 'GET_PROJECTS', projects })
    } catch (err) {
        console.log(err)
    }
}

export const updateProject = ({projectId, favorite, archived, projectName, projectColor}) => async (
    dispatch,
    getState,
    { getFirestore }
) => {
    const firestore = getFirestore()
    
    try {
        const projectDoc = await firestore.collection('projects').doc(projectId).get()
        const updatedProject = {
            ...projectDoc.data(),
            id: projectId,
            projectName: projectName ?? projectDoc.data().projectName,
            projectColor: projectColor ?? projectDoc.data().projectColor,
            favorite: favorite ?? projectDoc.data().favorite,
            archived: archived ?? projectDoc.data().archived,
        }

        dispatch({ type: 'UPDATE_PROJECT', updatedProject })
        await firestore.collection('projects').doc(projectId).update(updatedProject)
    } catch (err) {
        console.log(err)
    }
}

export const deleteProject = projectId => async (dispatch, getState, { getFirestore }) => {
    console.log('remove project')
    const firestore = getFirestore()
    const state = getState()
    try {
        const projects = state.projects.projects
        const projectDeletedId = projects.findIndex(project => project.id === projectId)
        await firestore.collection('projects').doc(projectId).delete()

        dispatch({ type: 'REMOVE_PROJECT', projectDeletedId })
    } catch (err) {
        console.log(err)
    }
}

export const changeProject = selectedProject => (dispatch, getState, { getFirestore }) =>
    dispatch({ type: 'CHANGE_PROJECT', activeProject: selectedProject })
