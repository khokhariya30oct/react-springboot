import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodoComponent from './ListTodoComponent'
import ErrorComponent from './ErrorComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import RouteAuthComponent from './RouteAuthComponent'
class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">               
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <RouteAuthComponent path="/welcome/:name" component={WelcomeComponent} />
                        <RouteAuthComponent path="/todos" component={ListTodoComponent} /> 
                        <RouteAuthComponent path="/logout" component={LogoutComponent} />
                        <Route component={ErrorComponent} />

                    </Switch>
                    <FooterComponent />
                </Router>
                
            </div>
        )
    }
}

export default TodoApp;