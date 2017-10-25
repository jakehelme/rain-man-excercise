import React, { Component } from 'react';
import {windowHeight, windowWidth, manWidth} from './../../constants';
import Man from './../Man';
import Rain from './../Rain';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.rainCount = 30;

		this.state = {
			man: {
				x: (windowWidth / 2) - (manWidth / 2),
				y: 0
			},
			gameOver: false
		};
	}

	handleManMove(input) {
		this.setState({
			man: {
				x: input,
				y: 0
			}
		});
	}

	gameOver() {
		this.setState({
			gameOver: true
		});
	}

	getRaindrops() {
		let drops = [];
		for(let i = 0; i < this.rainCount; i++) {
			drops.push(
				<Rain 
					x={Math.floor(Math.random() * windowWidth)} 
					delay={Math.floor(Math.random() * 10000)} 
					man={this.state.man}
					gameOver={() => this.gameOver()}
				/>
			);
		}
		return drops;
	}

	render() {

		const game = (
			<div>
				<Man position={this.state.man} onMove={(input) => this.handleManMove(input)}/>
				{this.getRaindrops()}
			</div>
		);

		return (
			<div id='game' style={{height: `${windowHeight}px`, width: `${windowWidth}px`}}>
				{
					this.state.gameOver ? null : game
				}
				
			</div>
		);
	}
}

export default App;
