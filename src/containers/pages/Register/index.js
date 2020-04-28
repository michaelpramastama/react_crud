import React, { Component } from 'react';
import './register.scss';
import firebase from '../../../config/firebase';

class Register extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) =>{
        // console.log(e.target.id)
        this.setState({
            [e.target.id] : e.target.value,
        })
    }

    handleRegisterSubmit = () => {
        const {email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res =>{
            console.log('Success: ', res);
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Pages</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} />
                    <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText} />
                    <button className="btn" onClick={this.handleRegisterSubmit}>Register</button>
                </div>
                {/* <button>Go To Dasboard</button> */}
            </div>
        );
    }
}

export default Register;