import { combineReducers } from "redux";
import { AuthTokenReducer } from "./AuthTokenReducer";
import { chatRooms } from "./ChatRoomsReducer";
import { messages } from "./MessageReducer";

export default combineReducers({
  AuthTokenReducer,
  chatRooms,
  messages,
});
