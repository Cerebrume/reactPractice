'use-strict'

import React from 'react';

class Clicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			eventCount: 0
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({eventCount: this.state.eventCount + 1});
	}

	render() {
		return (
			<div>
				<p>You clicked {this.state.eventCount}</p>
				<button onClick={this.handleClick}>Click here</button>
				<p>You typed: {this.state.username}</p>
				<input onChange={(event) => this.setState({username: event.target.value})}/>
			</div>
		);
	}
}

export default Clicker;