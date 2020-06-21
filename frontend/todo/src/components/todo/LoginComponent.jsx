import React from 'react';
import { Component } from 'react';


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : 'akhokhariya',
            password : '',
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
            LoginState = <p>Login Successfully!!!!</p>
        }
        else{
            LoginState = <p>unauthorised!!!!!</p>
        }

        return (
            <div>
                {LoginState}                
                UserName : <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
                &nbsp;&nbsp;Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                &nbsp;&nbsp;<button onClick={this.submit}>Submit </button> 
            </div>
        )
    }
}

export default LoginComponent;