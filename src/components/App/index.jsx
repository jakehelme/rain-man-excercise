import React, { Component } from 'react';
import {windowHeight, windowWidth} from './../../constants';
import Man from './../Man';
import './App.css';

class App extends Component {
	render() {
		return (
			<div id='game' style={{height: `${windowHeight}px`, width: `${windowWidth}px`}}>
				<Man/>

			</div>
		);
	}
}

export default App;
