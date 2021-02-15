import React from 'react'
import {Router} from '@reach/router'

// coustom component
import HomePage from '../pages/home';
import Errors from '../pages/404'

function AppRouter() {
    return (
        <Router>
            <HomePage path='/' />
            <Errors  default  />
        </Router>
    )
}

export default AppRouter
