import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './SimpleButton.css';

class SimpleButton extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const buttonClassNames = classNames(
			'button',
			this.props.style,
			this.props.size,
		);

		return (
			<button className={buttonClassNames}>
				<div className="button-text">{this.props.text}</div>
			</button>
		);
	}
}

SimpleButton.defaultProps = {
	size: 'normal',
	style: 'active'
}

SimpleButton.propTypes = {
	/**
	 * Text to render
	 */
	text: PropTypes.string,
	/**
	 * Size of text
	 */
	size: PropTypes.oneOf(['small', 'normal', 'large']),
	/**
	 * Style of button
	 */
	style: PropTypes.oneOf(['active', 'destructive']),
};

export default SimpleButton;
