import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
//reducers
import projectsReducer from './reducers/projectsReducer'

const rootReducer = combineReducers({
    firestore: firestoreReducer, 
    firebase: firebaseReducer,
    projects: projectsReducer,
})

export default rootReducer
