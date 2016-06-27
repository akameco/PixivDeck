import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ipcRenderer} from 'electron';

export default class App extends Component {
	constructor(props) {
		super(props);
		ipcRenderer.on('RANKING', (ev, res) => {
			console.log(res.response[0].works);
		});
	}

	componentDidMount() {
		ipcRenderer.send('RANKING', {mode: 'daily'});
	}

	render() {
		return (
			<div>
				hello electron
			</div>
		);
	}
}
