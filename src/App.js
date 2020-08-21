import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//Components
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/login' component={ Login } />
                <Route exact path='/signup' component={ Signup } />
            </Switch>
        </BrowserRouter>
    )
}

export default App
