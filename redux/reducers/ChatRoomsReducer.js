import * as actions from "../../redux/constants/ActionTypes";



const chatRoom = (state, action) => {
    switch (action.type) {
        case actions.ADD_CHAT_ROOM:
            return {
                id: action.roomId,
                users: action.users,
            }
        default:
            return state
    }
}



export const chatRooms = (state = [], action) => {

	switch(action.type){
		case(actions.ADD_CHAT_ROOM):
			if (state.map(m => m.id).includes(action.id)) {
                return state;
            }else{
                return [
                ...state,
                chatRoom(undefined, action)
                ]
            }

		default:
			return state;
	}

}
