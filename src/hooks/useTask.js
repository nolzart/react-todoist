import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'

const useTask = (taskId = '', activeProject = 'inbox') => {
    const currentUser = useSelector(state => state.firebase.auth)

    const allTasks = useSelector(state => state.firestore.data.tasks)
    const currentTask = allTasks && allTasks[taskId]

    const allProjects = useSelector(state => state.firestore.ordered.projects)
    const currentProject = allProjects && allProjects.find(project => project.id === activeProject)
    const [selectedProject, setSelectedProject] = useState({ ...currentProject })

    const [taskContent, setTaskContent] = useState('')

    useEffect(() => {
        setSelectedProject({ ...currentProject })

        if (currentTask) {
            setTaskContent(currentTask.task)
            const currentProject =
                allProjects && allProjects.find(project => project.id === currentTask.projectId)
            setSelectedProject({ ...currentProject })
        }
    }, [currentProject, currentTask])
    const firestore = useFirestore()

    const updateTask = async (dateContext, taskContent, selectedProject) => {
        try {
            await firestore
                .collection('tasks')
                .doc(taskId)
                .update({
                    date: new Date(dateContext),
                    task: taskContent,
                    projectId: selectedProject.id,
                    projectName: selectedProject.projectName,
                    userId: currentUser.uid,
                    username: currentUser.displayName,
                })
        } catch (err) {
            console.log(err)
        }
    }

    const addTask = async (dateContext, taskContent, selectedProject) => {
        try {
            await firestore.collection('tasks').add({
                task: taskContent,
                projectId: selectedProject.id,
                date: new Date(dateContext),
                projectName: selectedProject.projectName,
                userId: currentUser.uid,
                username: currentUser.displayName,
            })
        } catch (err) {
            console.log(err)
        }
    }

    const deleteTask = async () => {
        console.log(taskId)
        try {
            await firestore.collection('tasks').doc(taskId).delete()
        } catch (err) {
            console.log(err)
        }
    }
    return {
        selectedProject,
        setSelectedProject,
        taskContent,
        setTaskContent,
        addTask,
        updateTask,
        deleteTask,
    }
}

export default useTask
