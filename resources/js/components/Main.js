import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
 
import './Main.css';

import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import RoomTemplate from './RoomTemplate';
import QueueTest from './QueueTest';

class Main extends React.Component {
    constructor() {
        super();
        this.title = "web-chat-v2";

        this.state = {
            loginState: {
                loggedIn: false,
                username: ""
            }
        };

        this.updateLogin = this.updateLogin.bind(this);
    }

    componentDidMount() {
        /* If the cookie was set, this "should" just return our data */
        axios.get("./api/user").then((result) => {
            this.updateLogin({"status": true, "username": result.data.username});
        });
    }

    updateLogin(loginData) {
        this.setState({loginState: {loggedIn: loginData.status, username: loginData.username}});
    }

    render() {
        let logLinkComponent = <Link to="/login" className="link"><span className="link">LOGIN</span></Link>;
        let rooms = <span></span>;
        let register = <Link to="/register" className="link"><span className="link">REGISTER</span></Link>;

        if (this.state.loginState.loggedIn) {
            logLinkComponent = <Link to="/logout" className="link"><span className="link">LOGOUT</span></Link>;
            rooms = <Link to="/lounge" className="link"><span className="link">LOUNGE</span></Link>;
            register = <span></span>;
        }

        return (
            <div className="container">
                <Router basename="/main">
                    <div className="header">
                        <div className="logo">
                            {this.title}
                        </div>
                        <div className="links-header">
                            <Link to="/home" className="link"><span className="link">HOME</span></Link>
                            {logLinkComponent}
                            {register}
                            {rooms}
                            <Link to="/queue-test" className="link"><span className="link">QUEUE TEST</span></Link>
                        </div>
                    </div>

                    <div className="content">
                        <Switch>
                            <Redirect exact from="/" to="/home"/>
                            <Route path="/home" render={(props) => <Home loginState={this.state.loginState}/>}/>
                            <Route path="/login" render={(props) => <Login updateLogin={this.updateLogin}/>}/>
                            <Route path="/logout" render={(props) => <Logout updateLogin={this.updateLogin}/>}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/lounge" render={(props) => <RoomTemplate {...props} roomName="Lounge"/>}/>
                            <Route path="/queue-test" component={QueueTest}/>
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
