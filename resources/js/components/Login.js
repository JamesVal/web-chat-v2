import React, {Component} from 'react';
import axios from 'axios';

import './Login.css';

const C_USERNAME = 0;
const C_PASSWORD = 1;

class Login extends React.Component {
	constructor() {
		super();

	    this.state = {
	        username: "",
	        password: ""
	    };

	    this.handleChange = this.handleChange.bind(this);
	    this.handleLogin = this.handleLogin.bind(this);
	}

	handleChange(which) {
		return (evt) => {
			switch (which) {
				case C_USERNAME:
					this.setState({username: evt.target.value});
					break;
				case C_PASSWORD:
					this.setState({password: evt.target.value});
					break;
				default: break;
			}
		}
	}

	handleLogin(e) {
		console.log("Login");
		axios.post("./api/login-user", this.state).then((result) => {
			this.props.updateLogin({"status": result.data.status, "username": result.data.username});
		});
	}

	render() {
		return (
			<div className="inputs-container">
				<div className="inputs-inner"><div className="description"><span>Username:</span></div><div className="inputs"><input type="text" name="username" value={this.state.username} onChange={this.handleChange(C_USERNAME)} placeholder="Enter a username" /></div></div>		
				<div className="inputs-inner"><div className="description"><span>Password:</span></div><div className="inputs"><input type="password" name="password" value={this.state.password} onChange={this.handleChange(C_PASSWORD)}  placeholder="Enter a password" /></div></div>
				<div><button className="login-btn" onClick={this.handleLogin}>Login</button></div>
			</div>
		);
	}
}

export default Login;