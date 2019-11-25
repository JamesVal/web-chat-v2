import React, {Component} from 'react';
import axios from 'axios';

import './RoomTemplate.css';

class RoomTemplate extends React.Component {
	constructor(props) {
		super(props);

		this.roomName = this.props.roomName;
	}

	render() {
		return (
			<div className="room-container">
			Welcome to {this.roomName}
			</div>
		);
	}
}

export default RoomTemplate;