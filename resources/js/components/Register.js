import React, {Component} from 'react';
import axios from 'axios';

import './Register.css';

const C_USERNAME = 0;
const C_PASSWORD = 1;

class Register extends React.Component {
	constructor() {
		super();

	    this.state = {
	        username: "",
	        password: ""
	    };

	    this.handleChange = this.handleChange.bind(this);
	    this.handleRegister = this.handleRegister.bind(this);
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

	handleRegister(e) {
		console.log("Register");
		axios.post("./api/new-user", this.state).then((result) => {
			console.log(result);
		});
	}

	render() {
		return (
			<div>
				<span>Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange(C_USERNAME)} placeholder="Enter a username" /></span>		
				<span>Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange(C_PASSWORD)}  placeholder="Enter a password" /></span>
				<button onClick={this.handleRegister}>Register</button>
			</div>
		);
	}
}

export default Register;