import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

//import redux store
import { store, addPost } from './redux/redux.js';
//import main react component
import { Main } from './react_components/main.js';

//map redux store to react component props
const mapStateToProps = (state) => {
	return {
		posts: state.posts,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		submitNewPost: (post) => {
			dispatch(addPost(post));
		}
	};
};

//connet redux store to react component
const Container = connect(mapStateToProps, mapDispatchToProps)(Main);

class AppWrapper extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Container />
			</Provider>
		);
	}
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
