import React, { Component } from 'react';
import {windowWidth, manWidth, manHeight} from './../../constants';
import './Man.css';

class Man extends Component {
	constructor() {
		super();
		
		this.state = {
			position: (windowWidth / 2) - (manWidth / 2)
		};

		const moveDistance = 10;

		document.addEventListener('keydown', (event) => {
			if(event.keyCode === 37) {
				this.setState({
					position: this.state.position - moveDistance
				});
			} else if (event.keyCode === 39) {
				this.setState({
					position: this.state.position + moveDistance
				});
			}
		});
	}

	render() {
		const style = {
			left: `${this.state.position}px`,
			width: `${manWidth}px`,
			height: `${manHeight}px`,
		};

		return (
			<div id='man' style={style}></div>
		);
	}
}

export default Man;
