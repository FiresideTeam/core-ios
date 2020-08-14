import * as actions from "../constants/ActionTypes";


// Open a socket at namespace, with params and accessToken
export const openSocket = (namespace, params, accessToken) => ({
    type: actions.CREATE_SOCKET,
    accessToken: accessToken
})

export const sendOnSocket = content => ({
	type: actions.SOCKET_SEND,
	payload: {
		content
	}
})


export const addMessage = (msg) => ({
    type: 'ADD_MESSAGE',
    ...msg
});


export const sendMessage = (text, user) => {
    return function (dispatch) {
        let msg = {
                text: text,
                time: Date.now(),
                user: user,
            };

        //async send
        console.log("send message!");

        dispatch(addMessage(msg));
    };
};

export const receivedMessages = () => ({
    type: 'RECEIVED_MESSAGES',
    receivedAt: Date.now()
});

export const fetchMessages = () => {
    return function (dispatch) {
        dispatch(startFetchingMessages());

        //async fetch
	}
}

export const receiveMessages = (messages) => {
    return function (dispatch) {
        console.log('messages', Object.values(messages));
        Object.values(messages).forEach(msg => dispatch(addMessage(msg)));

        dispatch(receivedMessages());
    }
}
