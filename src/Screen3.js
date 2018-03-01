import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
// import * as tech from './actions/tech';

class Screen3 extends Component {
    constructor(){
        super();
        this.state = {
            value: ''
        }

    }
    render() {
        return (
            <div className="App">
                <input type="text" value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}/>
                {/*<button onClick={() => {*/}
                    {/*tech.onChange("PLANE",this.state.value);*/}
                    {/*this.props.history.push('/screen4');*/}
                {/*}}> Add Plane*/}
                {/*</button>*/}
            </div>
        );
    }
}
export default connect(store => ({store:store}))(withRouter(Screen3))