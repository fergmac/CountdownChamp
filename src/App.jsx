import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ''
        }
    }
    changeDeadline () {
        this.setState({deadline: this.state.newDeadline})
    }
    render() {
        return (
            <div className="app">
                <div className="app-title">Countdown to {this.state.deadline}</div>
                <div>
                    <Clock deadline={this.state.deadline}/>
                </div>
                <div>
                    <input 
                    placeholder='new date'
                    onChange={(event) => this.setState({newDeadline: event.target.value})}
                    />
                    <button onClick={() => this.changeDeadline()}>button</button>
                </div>
            </div>
        )
    }
}

export default App;