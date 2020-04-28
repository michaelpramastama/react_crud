import React from 'react';
// import logo from '../../../assets/img/logo/logo.svg';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";
import Dasborad from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import './App.css';

function App() {
  return (
      <Router>
          <div>
                <Route path="/" exact component={Dasborad} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

          </div>
      </Router>
    );
}

export default App;
