import React, {Component} from 'react';
import axios from 'axios';

import './QueueTest.css';

class QueueTest extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		Echo.channel('laravel_database_test-channel')
		    .listen('.queue.post', (e) => {
		        console.log(e);
		    });
		Echo.channel('laravel_database_test-channel')
		    .listen('.TEST', (e) => {
		        console.log(e);
		    });
	}

	handleClick(e) {
		/*
		axios.post("./api/create-test-queue", {}).then((result) => {
			console.log(result);
		});
		*/
		axios.post("./api/publish", {}).then((result) => {
			console.log(result);
		});
	}

	render() {
		return (
			<div>
			Queue Testing <button onClick={this.handleClick}>Add To Queue</button>
			</div>
		);
	}
}

export default QueueTest;