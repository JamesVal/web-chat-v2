import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
 
import './Main.css';

import Home from './Home';
import Login from './Login';
import Register from './Register';

class Main extends React.Component {
    constructor() {
        super();
        this.title = "web-chat-v2";
    }

    render() {
        return (
            <div className="container">
                <Router basename="/main">
                    <div className="header">
                        <div className="logo">
                            {this.title}
                        </div>
                        <div className="links-header">
                            <Link to="/home" className="link"><span className="link">HOME</span></Link>
                            <Link to="/login" className="link"><span className="link">LOGIN</span></Link>
                            <Link to="/register" className="link"><span className="link">REGISTER</span></Link>
                        </div>
                    </div>

                    <div className="content">
                        <Switch>
                            <Redirect exact from="/" to="/home"/>
                            <Route path="/home" component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Main;

if (document.getElementById('main-app')) {
    ReactDOM.render(<Main />, document.getElementById('main-app'));
}
