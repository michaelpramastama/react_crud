import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component{
    render(){
        return(
            <div>
                <h1>Login Page {this.props.popupProps}</h1>
                <button>Go To Register</button>
                <button>Go To Dasboard</button>
            </div>
        );
    }
}
const reduxState = (state) => ({
     popupProps: state.popup
})
export default connect(reduxState, null) (Login);