import * as actions from "../../redux/constants/ActionTypes";

const post = (state, action) => {
	return {
		key: action.id,
		description: undefined,
		type: undefined,
		extra: undefined,
		poster_name: undefined,
		data: action.data,

	}
}

const posts = (state, actions) => {
	switch(action.type) {
	 case actions.RECEIVED_POSTS:
	 	if(state.map((m) => m.id).includes(action.id)){
	 		return state;
	 	} else {
	 		return [...state, post(undefined, action)];
	 	}
	 default:
	 	return state;
	}
}