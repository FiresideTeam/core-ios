import { combineReducers } from 'redux';
import { AuthTokenReducer } from "./AuthTokenReducer";
import { messages } from "./MessageReducer"

export default combineReducers({
    AuthTokenReducer,
    messages,
})