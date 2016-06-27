import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
	render() {
		return (
			<div>
				hello world
			</div>
		);
	}
}

render(<App/>, document.querySelector('.root'));
