import React from 'react';
import './counterComponent.css'
import { Component } from 'react';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div>
                <CounterButton by={+1} incrementMethod={this.increment} />
                <CounterButton by={+5} incrementMethod={this.increment} />
                <CounterButton incrementMethod={this.increment}/>
                <CounterButton by={-1} incrementMethod={this.increment} />
                <CounterButton by={-5} incrementMethod={this.increment} />
                <CounterButton by={-10} incrementMethod={this.increment}/>
                <span className="counter">{this.state.counter}</span>
                <button className="" onClick={this.reset}>Reset</button>
            </div>
        )
    }

    increment(val) {
        // alert('parent')
        this.setState((prevState) => { return {counter : prevState.counter + val}})
        
    }

    reset() {
        // alert('parent')
        this.setState({counter : 0})
        
    }
}


class CounterButton extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }

        // this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.incrementMethod(this.props.by)}>{this.props.by}</button>                
            </div>
        )
    }

    // increment () {
    //     this.props.incrementMethod(this.props.by);
    // }
    
}

CounterButton.defaultProps = {
    by : 10
}


export default Counter;