import * as actions from "../../redux/constants/ActionTypes";

export const socket = (state = [], action) => {
  switch (action.type) {
    case actions.CREATE_SOCKET:
      return {
        socketId: -1,
      };
    case actions.SOCKET_CREATED:
      console.log("created");
      return {
        socketId: action.socketId,
      };
    default:
      return state;
  }
};
