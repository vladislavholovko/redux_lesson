import React, {Component} from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import * as tech from './actions/tech';


class Screen2 extends Component {
    constructor() {
        super();
        this.state = {
            description: ''
        }

    }

    render() {
        return (
            <div className="App">
                <div>
                    <label htmlFor="descriptionUser">Description</label>
                    <input id="descriptionUser" type="text" value={this.state.description}
                           onChange={(e) => this.setState({description: e.target.value})}/>
                </div>
                <button onClick={() => {
                    tech.addDescription(this.state.description);
                    tech.addUsers()
                    this.props.history.push('/screen4');
                }}> Зберегти
                </button>
            </div>
        );
    }
}

export default connect(store => ({store: store}))(withRouter(Screen2))