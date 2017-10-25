import React, { Component } from 'react';
import {windowHeight, windowWidth} from './../../constants';
import Man from './../Man';
import Rain from './../Rain';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.rainCount = 30;
	}

	getRaindrops() {
		let drops = [];
		for(let i = 0; i < this.rainCount; i++) {
			drops.push(<Rain x={Math.floor(Math.random() * windowWidth)} delay={Math.floor(Math.random() * 10000)}/>)
		}
		return drops;
	}

	render() {
		return (
			<div id='game' style={{height: `${windowHeight}px`, width: `${windowWidth}px`}}>
				<Man/>
				{this.getRaindrops()}
			</div>
		);
	}
}

export default App;
