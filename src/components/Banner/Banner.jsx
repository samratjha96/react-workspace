import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Banner.css';

class Banner extends Component {

	constructor(props) {
		super(props);
		this.state = { rendered: true }
	}

	dismissBanner = () => {
		this.setState({rendered: false})
	}

	render() {

		const bannerClassNames = classNames(
			'banner',
			this.props.style,
			this.props.size
		);

		return (
			<div className={this.state.rendered ? bannerClassNames : 'banner-hidden'}>
				<p className="text">{this.props.text}</p>
				<a className="close" onClick={this.dismissBanner}>&times;</a>
			</div>
		);
	}
}

Banner.defaultProps = {
	style: 'info',
	size: 'narrow'
}

Banner.propTypes = {
	/**
	 * Text to render inside the banner
	 */
	text: PropTypes.string,
	
	/**
	 * Style of button
	 */
	style: PropTypes.oneOf(['info', 'error']),

	/**
	 * Size of the banner
	 */
	size: PropTypes.oneOf(['narrow', 'wide'])
};

export default Banner;