import React, { Component } from 'react';
import { windowHeight, rainWidth, rainHeight, manWidth, manHeight } from './../../constants';
import './Rain.css';

class Rain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			x: props.x,
			y: windowHeight - rainHeight,
			visible: false
		};

		setTimeout(() => {
			this.setState({
				visible: true
			});
			setInterval(() => {
				if (this.hasCollided()) {
					this.props.gameOver();
				}

				this.setState({
					y: this.state.y < 0 + rainHeight ? windowHeight : this.state.y - 5
				});
			}, 50);
		}, this.props.delay);
	}

	hasCollided() {
		return this.state.x < this.props.man.x + manWidth &&
			this.state.x + rainWidth > this.props.man.x &&
			this.state.y < this.props.man.y + manHeight &&
			rainHeight + this.state.y > this.props.man.y;
	}

	render() {
		const style = { 
			bottom: `${this.state.y}px`, 
			height: `${rainHeight}px`, 
			width: `${rainWidth}px`, 
			left: `${this.state.x}px`,
			visibility: this.state.visible ? 'visible' : 'hidden'
		};

		return (
			<div className='raindrop' style={style} />
		);
	}
}

export default Rain;
