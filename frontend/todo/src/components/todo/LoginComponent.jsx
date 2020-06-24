import React from 'react';
import { Component } from 'react';
import AuthService from './AuthService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : 'akhokhariya',
            password : '5123',
            isLoggedIn : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value})
    }

    submit(){
        if (this.state.userName === 'akhokhariya' && this.state.password === '5123') {
           this.setState({isLoggedIn : true});
           AuthService.setSession(this.state.userName,this.state.password);

        }
        else{
            this.setState({isLoggedIn : false});
        }
    }

    render() {
        let LoginState;
        if (this.state.isLoggedIn === '') {
            LoginState = <></>
        }
        else if (this.state.isLoggedIn) {
            this.props.history.push(`/welcome/${this.state.userName}`)
            LoginState = <p>Login Successfully!!!!</p>
        }
        else{
            LoginState = <p>Invalid Username or Password!!!!!</p>
        }

        return (
            <div>
                <form>
                    {LoginState}
                    UserName : <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
                    &nbsp;&nbsp;Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    &nbsp;&nbsp;<button type="submit" onClick={this.submit}>Submit </button> 
                </form>
            </div>
        )
    }
}

export default LoginComponent;