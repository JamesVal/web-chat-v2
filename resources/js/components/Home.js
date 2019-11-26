import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import "./Home.css";

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let loginComponent = <div>Welcome!  Please <Link to="/login" className="link"><span className="link">Login</span></Link> here.</div>;
		if (this.props.loginState.loggedIn) {
			loginComponent = <div>Welcome {this.props.loginState.username}!</div>
		}

		return(
			<div className="home-msg">{loginComponent}</div>
		);
	}
}

export default Home;