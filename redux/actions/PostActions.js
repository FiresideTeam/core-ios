// Start fetching messages
export const startFetchingPosts = () => ({
  type: actions.SOCKET_SEND,
  isFetching: true,
  eventName: "get",
  namespace: "messages",
  params: 1,
  payload: null,
});

export const postsReceived = (fetching) => ({
  type: actions.RECEIVED_POSTS,
  fetching: false,
});

export const receivePosts = (messages) => {
  return function (dispatch) {
    console.log("messages", Object.values(messages));
  };
};

export const sendPost = (text, user) => ({
  type: actions.SOCKET_SEND,
  eventName: "create",
  namespace: "messages",
  params: null,
  text: text,
  payload: text,
  id: makeid(16),
  user: user,
});

export const addPost = (msg) => ({
  type: "ADD_MESSAGE",
  ...msg,
});
