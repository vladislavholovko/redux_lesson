import React, {Component} from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

class Screen4 extends Component {
    render() {
        let info = this.props.allUsers;
        let mas = info.map((value,index) => {
            return (
                <div style={{border: "solid", borderColor:"#000"}} key={index}>
                    <h3>Login: {value.login}</h3>
                    <h5>Email: {value.email}</h5>
                    <h5>Password: {value.password}</h5>
                    <h6>Descriptions: {value.description}</h6>
                </div>
            )
        })

        return (
            <div>
                <div>
                    {mas}
                </div>
                <button onClick={() => this.props.history.push('/')}>Add</button>
            </div>
        );
    }
}

export default connect(store => ({allUsers: store.allUsers.allUsers}))(withRouter(Screen4))