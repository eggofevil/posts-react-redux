import React from 'react';
import PropTypes from 'prop-types';

export class SubmitButton extends React.Component {
	static propTypes = {
		onClick: PropTypes.func,
	};
	render() {
		return (
			<button onClick={this.props.onClick}>Submit post</button>
		);
	}
}
