import React from 'react';

export class Posts extends React.Component {
	render() {
		return (
			<ul>
				{this.props.posts.map((post, idx) => {
					return <li key={idx}>{post}</li>;
				})}
			</ul>
		);
	}
}
