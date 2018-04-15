"use-strict";

import React, { Component } from "react";

export class StopWatch extends Component {
  constructor(props) {
	super(props);
  }
  state = {
	running: false,
	lapse: 0
  };

	 
  handleRunClick = () => {
	  this.setState(state => {
		  if (state.running) {
				clearInterval(this.timerId);
		  } else {
			const startTime = Date.now() - this.state.lapse;
			this.timerId = setInterval(() => {
				this.setState({lapse: Date.now() - startTime});
				console.log(this.state);
			}, 0);
		}
			return {running: !state.running}
	  })

  };

  handleClearClick = () => {
	clearInterval(this.timerId);
	this.setState({running: false, lapse: 0});
	}
	
	componentWillUnmount = () => {
		clearInterval(this.timerId);
	}
	

  render() {
	const { lapse, running } = this.state;
	return (
	  <div
		style={{
		  display: "flex",
		  flexDirection: "column",
		  width: 300,
		  alignItems: "center"
		}}>
		<label>
		  <h1>{lapse ? lapse : "0"}ms</h1>
		</label>
		<button onClick={this.handleRunClick} className="btn">
		  {running ? "Stop" : "Start"}
		</button>
		<button onClick={this.handleClearClick} className="btn">Clear</button>
	  </div>
	);
  }
}

export default StopWatch;
