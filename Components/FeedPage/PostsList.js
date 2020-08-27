import React, { Component } from "react-native"

class PostsList {
	constructor(props){
		super(props)
	}

	render(){
		return(

		);
	}
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  isFetching: false,
});

export default connect(mapStateToProps)(PostsLists)