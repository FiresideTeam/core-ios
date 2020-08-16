export const fetchChatRooms = () => ({
  type: actions.FETCH_CHAT_ROOMS,
  eventName: "get",
  namespace: "messages",
  params: null,
  payload: null,
});

export const addChatRoom = (text, user) => ({
  type: actions.ADD_CHAT_ROOM,
  eventName: "create",
  namespace: "messages",
  params: null,
  text: text,
  payload: text,
  id: makeid(16),
  user: user,
});
