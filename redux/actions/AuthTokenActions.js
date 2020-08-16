import * as actions from "../constants/ActionTypes";

export const fetchUserAuthToken = (content) => ({
  type: actions.FETCH_USER_AUTH_TOKEN,
  payload: {
    content,
  },
});
