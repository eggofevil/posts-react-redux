import React from 'react';
import PropTypes from 'prop-types';

export class Input extends React.Component {
	static propTypes = {
		onChange: PropTypes.func,
		value: PropTypes.string
	};

	render() {
		return (
			<input onChange={this.props.onChange} value={this.props.value} type='text' />
		);
	}
}
