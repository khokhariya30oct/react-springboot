import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';


class WelcomeComponet extends Component{
    render() {
        return (
            <div>
                Welcome {this.props.match.params.name} !!
                <br/>
                <Link to="/todos"> Click Here</Link> to Redirect Todos page 
            </div>
        )
    }
}

export default WelcomeComponet;