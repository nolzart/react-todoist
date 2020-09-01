import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
//reducers
import projectReducer from './reducers/projectReducer'
import taskReducer from './reducers/taskReducer'

const rootReducer = combineReducers({
    firestore: firestoreReducer, 
    firebase: firebaseReducer,
    projects: projectReducer,
    task: taskReducer
})

export default rootReducer
