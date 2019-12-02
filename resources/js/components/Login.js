import React, {Component, useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import './Login.css';

const C_USERNAME = 0;
const C_PASSWORD = 1;

function Login(props) {
	let history = useHistory();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleLogin(e) {
		axios.post("./api/login-user", {username: username, password: password}).then((result) => {
			props.updateLogin({"status": result.data.status, "username": result.data.username});
			console.log(result);
			if (result.data.status === true)
				history.push("/home");
		});
	}

	function handleChange(which) {
		return (evt) => {
			switch (which) {
				case C_USERNAME:
					setUsername(evt.target.value);
					break;
				case C_PASSWORD:
					setPassword(evt.target.value);
					break;
				default: break;
			}
		}
	}

	function handleKeyPress(evt) {
		if (evt.key === "Enter") {
			handleLogin();
		}
	}

	return(
		<div className="inputs-container">
			<div className="inputs-inner"><div className="description"><span>Username:</span></div><div className="inputs"><input autoComplete="off" type="text" name="username" value={username} onChange={handleChange(C_USERNAME)} placeholder="Enter a username" /></div></div>		
			<div className="inputs-inner"><div className="description"><span>Password:</span></div><div className="inputs"><input autoComplete="off" type="password" name="password" value={password} onChange={handleChange(C_PASSWORD)}  placeholder="Enter a password" onKeyPress={handleKeyPress}/></div></div>
			<div><button className="login-btn" onClick={handleLogin}>Login</button></div>
		</div>
	);
}

export default Login;