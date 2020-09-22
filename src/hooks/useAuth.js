import React from 'react'
import { isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
const useAuth = () => {
    
    const firebase = useFirebase()

    const AuthIsLoaded = ({ children }) => {
        const auth = useSelector(state => state.firebase.auth)
        if (!isLoaded(auth)) return <div>loading...</div>
        return children
    }

    const createUserWithEmail = async user => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            await firebase.auth().currentUser.updateProfile({
                displayName: user.username,
            })
            if (!user.permanentLogin) signOut()
        } catch (err) {
            console.log(err)
        }
    }

    const signInWithGoogle = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider()
            await firebase.auth().signInWithPopup(provider)
        } catch (err) {
            console.log(err)
        }
    }

    const signInWithFacebook = async () => {
        try {
            const provider = new firebase.auth.FacebookAuthProvider()
            await firebase.auth().signInWithPopup(provider)
        } catch (err) {
            console.log(err)
        }
    }
    const signOut = async () => {
        try {
            await firebase.auth().signOut()
        } catch (err) {
            console.log(err)
        }
    }

    const signInWithEmail = async ({ email, password }) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (err) {
            console.log(err)
        }
    }

    return {
        createUserWithEmail,
        signInWithEmail,
        signInWithGoogle,
        signInWithFacebook,
        signOut,
        AuthIsLoaded,
    }
}

export default useAuth
