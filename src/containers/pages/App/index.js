import React from 'react';
// import logo from '../../../assets/img/logo/logo.svg';
import { BrowserRouter as Router , Route } from "react-router-dom";
import Dasborad from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import { Provider } from 'react-redux';
import { store } from '../../../config/redux';
import './App.css';

function App() {
  return (
    <Provider store = {store}>
        <Router>
            <div>
                  <Route path="/" exact component={Dasborad} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
            </div>
        </Router>
    </Provider>
    );
}

export default App;
