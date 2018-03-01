import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import * as tech from './actions/tech'

class Screen1 extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className="App">
                <div>
                    <label htmlFor="nameUser">Name Users </label>
                    <input id="nameUser" type="text" value={this.state.name}
                           onChange={(e) => this.setState({name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="emailUser">Email Users </label>
                    <input id="emailUser" type="text" value={this.state.email}
                           onChange={(e) => this.setState({email: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="passworsUser">Password Users </label>
                    <input id="passworsUser" type="text" value={this.state.password}
                           onChange={(e) => this.setState({password: e.target.value})}/>
                </div>
                <button onClick={() => {
                    tech.addName(this.state.name);
                    tech.addEmail(this.state.email);
                    tech.addPassword(this.state.password);
                    this.props.history.push('/screen2');
                }}> Далі
                </button>
            </div>
        );
    }
}

export default connect(store => ({store: store}))(withRouter(Screen1))