import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SimpleButton.css';

class SimpleButton extends Component {

	constructor(props) {
        super(props);
	}

    render() { 
		const sizes = {
			small: '10px',
			normal: '14px',
			large: '18px',
		};

		const styles = {
			color: this.props.color,
			fontSize: sizes[this.props.size],
		};
	
		return (
			<button className="button" style={styles}>
				{this.props.text}
			</button>
		);
    }
}

SimpleButton.defaultProps = {
	color: '#333',
	size: 'normal',
}

SimpleButton.propTypes = {
	/**
	 * Text to render
	 */
	text: PropTypes.string,
	/**
	 * Color of text
	 */
	color: PropTypes.string,
	/**
	 * Size of text
	 */
	size: PropTypes.oneOf(['small', 'normal', 'large']),
};
export default SimpleButton;