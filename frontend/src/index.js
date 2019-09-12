import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/app/App';
import Join from './pages/join/Join';
import Tracker from './pages/tracker/Tracker';
import Profile from './pages/profile/Profile'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'typeface-roboto';
import './bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'


ReactDOM.render(
 
<div>
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin='true' />
    <Header/>
    <Router>
        <Switch>
        <Route exact path='/join' component={Join} />
        <Route exact path='/tracker' component={Tracker} />
        <Route exact path='/profile' component={Profile} />
        <Route path='/' component={App} />
        </Switch>
    </Router>
    <Footer/>

</div>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
