import React from 'react';

class Box extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {style, size,  className = className ? className : '', ...rest} = this.props;
		const sizeClassName = `box--${size}`;
		return (
			<div>
				<div
					className={`box ${className} ${sizeClassName}`}
					style={{paddingLeft: 20, ...style}}
					{...rest}>
					
					</div>
			</div>
		);
	}
}

export default Box;