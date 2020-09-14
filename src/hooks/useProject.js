import { useState, useEffect } from 'react'
import { useFirestore } from 'react-redux-firebase'

const useProject = (projectId = '') => {
    const firestore = useFirestore()
    const [inputValues, setInputValues] = useState({
        projectName: '',
        projectColor: {name: 'gray', color: '#b8b8b8'},
        favorite: false,
    })

    const deleteProject = async () => {
        try {
            await firestore.collection('projects').doc(projectId).delete()
        } catch (err) {
            console.log(err)
        }
    }

    const addProject = async () => {
        const newProject = {
            ...inputValues,
            date: new Date(),
            authorFirstName: 'Omar',
            authorLastName: 'Colmenares',
            authorId: 12345,
            archived: false,
        }
        try {
            await firestore.collection('projects').add(newProject)
        } catch (err) {
            console.log(err)
        }
    }
    const updateProject = async () => {
        try {
            const updatedProject = {
                projectName: inputValues.projectName,
                projectColor: inputValues.projectColor,
                favorite: inputValues.favorite,
            }
            await firestore.collection('projects').doc(projectId).update(updatedProject)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (projectId) {
            firestore
                .collection('projects')
                .doc(projectId)
                .get()
                .then(projectDoc => {
                    setInputValues({
                        projectName: projectDoc.data().projectName,
                        projectColor: projectDoc.data().projectColor,
                        favorite: projectDoc.data().favorite,
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
        console.log(inputValues)
    }, [projectId])
    return { inputValues, setInputValues, addProject, deleteProject, updateProject }
}

export default useProject
