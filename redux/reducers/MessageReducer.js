import * as actions from "../../redux/constants/ActionTypes";



const message = (state, action) => {
    switch (action.type) {
         case(actions.RECEIVED_MESSAGES):
            console.log('action1', action);
            return {
                key: action.id,
                id: action.id,
                text: action.text,
                user: action.user
            }
        default:
            return state
    }
}



export const messages = (state = [], action) => {
    console.log('Redux Action:', action)
	switch(action.type){
        case(actions.RECEIVED_MESSAGES):
            if (state.map(m => m.id).includes(action.id)) {
                return state;
            }else{
                return [
                ...state,
                message(undefined, action)
                ]
            }
		default:
			return state;
	}

}
