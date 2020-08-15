import * as actions from "../constants/ActionTypes";

// Move to a service file
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
	   for ( var i = 0; i < length; i++ ) {
	      result += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }

   return result;
}



// Fetching

// Start fetching messages
export const startFetchingMessages = () => ({
	type: actions.SOCKET_SEND,
	isFetching: true,
	eventName: 'request',
	namespace: 'messages',
	params: null,
	payload: null,

});

export const messagesReceived = (fetching) => ({
	type: actions.MESSAGE_FETCH_COMPLETED,
	fetching: false
})


export const receiveMessages = (messages) => {
    return function (dispatch) {
        console.log('messages', Object.values(messages));

    }
}


export const sendMessage = (text, user) => ({
	type: actions.SOCKET_SEND,
	eventName: 'create',
	namespace: 'messages',
	params: null,
	text: text,
	payload: text,
	id: makeid(16),
	user: user

})

export const addMessage = (msg) => ({
    type: 'ADD_MESSAGE',
    ...msg
});


