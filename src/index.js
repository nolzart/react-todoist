import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createStore, compose, applyMiddleware } from 'redux'
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import thunk from 'redux-thunk'
import firebase from './config/firebase'

import './styles/main.scss'
import App from './App'
import rootReducer from './components/store/rootReducer'

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    // enableClaims: true,
}

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore})),
        reduxFirestore(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance 
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
)
