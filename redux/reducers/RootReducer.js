import { combineReducers } from 'redux'
import { AuthTokenReducer } from "./AuthTokenReducer"
import { ChatRoomsReducer } from "./ChatRoomsReducer"
import { messages } from "./MessageReducer"

export default combineReducers({
    AuthTokenReducer,
    ChatRoomsReducer,
    messages,
})