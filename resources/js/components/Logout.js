import React, {Component} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import './Logout.css';

function Logout(props) {
	let history = useHistory();	

	props.updateLogin({"status": false, "username": ""});
	history.push("/home");

	return(<div>Logging out...</div>);
}

export default Logout;