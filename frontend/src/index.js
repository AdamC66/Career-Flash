import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/app/App';
import Join from './pages/join/Join'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
<div>
    <Router>
        <Route exact path='/join' component={Join} />
        <Route path='/' component={App} />
    </Router>

</div>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
