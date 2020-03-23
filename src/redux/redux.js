import { createStore } from 'redux';

//action types
const ADD_POST = 'ADD_POST';
//initial state
const defaultState = {
	posts: [],
};

//action
export const addPost = (post) => {
	return {
		type: ADD_POST,
		post: post
	};
};

//reducer
const postReducer = (state = defaultState, action) => {
	switch(action.type) {
		case ADD_POST:
			return {
				posts: state.posts.concat(action.post)
			};
		default:
			return state;
	}
};

//create store
export const store = createStore(postReducer);
