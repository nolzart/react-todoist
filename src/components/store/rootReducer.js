import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    firestore: firestoreReducer, 
    firebase: firebaseReducer
})

export default rootReducer
