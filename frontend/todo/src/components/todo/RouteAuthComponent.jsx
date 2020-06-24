import React,{Component} from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthService from './AuthService'


class RouteAuthComponent extends Component {
    render () {
        if (AuthService.checkIfLoggedInUser()) {
            return <Route {...this.props} />
        }
        else{
            return <Redirect to="/login" />
        }
    }
}

export default RouteAuthComponent;