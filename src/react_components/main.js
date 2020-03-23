import React from 'react';

//components import
import {Input} from './input.js';
import {SubmitButton} from './button.js';
import {Posts} from './posts.js';
import {store} from '../redux/redux.js';

export class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
		};
		this.submitPost = this.submitPost.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	submitPost() {
		this.props.submitNewPost(this.state.input);
		store.getState().posts.map(item => console.log(item));
		this.setState({input: ''});
	}
	handleInput(event) {
		return this.setState({
			input: event.target.value
		});
	}

	render() {
		return (
			<div>
				<h1>Hello world!!!</h1>
				<Input onChange={this.handleInput} value={this.state.input}/>
				<SubmitButton onClick={this.submitPost} />
				<Posts posts={this.props.posts}/>
			</div>
		);
	}
}
