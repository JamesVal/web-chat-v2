import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
 
import './Main.css';

import Home from './Home';
import Login from './Login';
import Register from './Register';

/*
        <Router>
        <div className="links-container">
        <Link to="/home" className="link"><span className="link">Home</span></Link> |&nbsp;
        <Link to="/i1" className="link"><span className="link">Inventory 1</span></Link> |&nbsp;
        <Link to="/i2" className="link"><span className="link">Inventory 2</span></Link> |&nbsp;
        <Link to="/i3" className="link"><span className="link">Inventory 3</span></Link> |&nbsp;
        <Link to="/login" className="link"><span className="link">Login</span></Link>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home"/>}/>
            <Route path="/home" component={Welcome}/>
            <Route path="/needauth" component={NeedsAuth}/>
            <Route path="/nopermission" component={NoPermission}/>
            <Route path="/login" render={(props) => <Login {...props} onLoginUpdate={this.handleLogin}/>}/>
            {inventoryArr}
          </Switch>
        </div>
        </Router>
        
*/

class Main extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="content">
                    <Router basename="/main">
                        <div className="links-header">
                            <Link to="/home" className="link"><span className="link">HOME</span></Link>
                            <Link to="/login" className="link"><span className="link">LOGIN</span></Link>
                            <Link to="/register" className="link"><span className="link">REGISTER</span></Link>
                        </div>

                        <Switch>
                            <Redirect exact from="/" to="/home"/>
                            <Route path="/home" component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default Main;

if (document.getElementById('main-app')) {
    ReactDOM.render(<Main />, document.getElementById('main-app'));
}
