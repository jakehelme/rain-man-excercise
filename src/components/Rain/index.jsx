import React, {Component} from 'react';
import {windowHeight, manWidth, manHeight} from './../../constants';
import './Rain.css';

class Rain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			yPos: windowHeight
		}

		setInterval(() => {
			this.setState({
				yPos: this.state.yPos - 5
			});
		}, 50);
	}

	render() {
		return (
			<div class='raindrop' style={{bottom: `${this.state.yPos}px`, height: `${manHeight}px`, width: `${manWidth}px`, left: `${this.props.x}px`}}/>
		);
	}
}

export default Rain;
