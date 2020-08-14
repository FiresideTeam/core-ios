import * as actions from "../constants/ActionTypes";


// Open a socket at namespace, with params and accessToken
export const openSocket = (namespace, params, accessToken) => ({
    type: actions.CREATE_SOCKET,
    accessToken: accessToken
})
