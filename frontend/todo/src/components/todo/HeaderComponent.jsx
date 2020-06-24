import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService'
import {withRouter} from 'react-router';

class HeaderComponent extends Component {
    
    render () {        
        const isLoggedIn = AuthService.checkIfLoggedInUser();
        
        return (

            <>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="app-Link"><a href="/">Todo</a></div>
                    <ul className="navbar-nav">
                        {isLoggedIn && <li className="nav-link"><Link to="/">Home</Link></li>}
                        {isLoggedIn && <li className="nav-link"><Link to="/todos">Todos</Link></li>}
                    </ul>
        
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isLoggedIn && <li className="nav-link"><Link to="/login">Login</Link></li>}
                        {isLoggedIn &&<li className="nav-link" onClick={AuthService.logout}><Link to="/logout">Logout</Link></li>}
                    </ul>
                </nav>
                <hr></hr>
            </>
        )
    }

    
}

export default withRouter(HeaderComponent)