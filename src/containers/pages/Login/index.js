import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionUsername } from '../../../config/redux/action';

class Login extends Component{

    changeUser = () =>{
        this.props.changeUserName()
    }

    render(){
        return(
            <div>
                <h1>Login Page {this.props.userName}</h1>
                <button onClick={this.changeUser}>Change User Name</button>
                <button>Go To Dasboard</button>
            </div>
        );
    }
}


const reduxState = (state) => ({
     popupProps: state.popup,
     userName: state.user
})


const reduxDispatch = (dispatch) => ({
    changeUserName: () => dispatch(actionUsername())
})

export default connect(reduxState, reduxDispatch) (Login);