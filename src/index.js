import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/pages/App';
import * as serviceWorker from './serviceWorker';
import Firebase from './config/firebase';


console.log(Firebase);

ReactDOM.render(<App />,  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
