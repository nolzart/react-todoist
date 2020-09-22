import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//Components
import Home from './components/pages/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import SignupStepTwo from './components/auth/SignupStepTwo'
import Content from './components/pages/Content'
import useAuth from './hooks/useAuth'
const App = () => {
    const { AuthIsLoaded } = useAuth()
    return (
        <BrowserRouter>
            <Switch>
                <AuthIsLoaded>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/signup/step_two' component={SignupStepTwo} />
                    <Route exact path='/app' component={Content} />
                </AuthIsLoaded>
            </Switch>
        </BrowserRouter>
    )
}

export default App
