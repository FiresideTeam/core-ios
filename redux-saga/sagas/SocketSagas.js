import { AsyncStorage } from "react-native";
import { put, fork, take, call, apply } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import socketio from "@feathersjs/socketio-client";

import {
  saveLocalData,
  getLocalData,
} from "../../redux/actions/AsyncStorageActions";
import { startFetchingMessages } from "../../redux/actions/MessageActions";

import * as actions from "../../redux/constants/ActionTypes";

const io = require("socket.io-client");

function createSocketConnection(url, namespace) {
  return io(url + "/" + namespace);
}

function createSocketChannel(socket) {
  return eventChannel((emit) => {
    const eventHandler = (event) => {
      //console.log(event);
      emit(event);
      //receiveMessages(event.payload)
    };

    const errorHandler = (errorEvent) => {
      emit(new Error(errorEvent.reason));
    };

    // On connect, attempt to authenticate
    socket.on("connect", () => {
      console.log("Fireside [Socket] : connected to the server");
      // Pass auth in as a param later, to async storage stuff outside of this callback
      if (false) {
        console.log("Fireside [Socket] : accessToken found", data);
      } else {
        console.log("Fireside [Socket] : accessToken not found");
        console.log("Fireside [Socket] : Attempting to fetch from server...");

        socket.emit(
          "create",
          "authentication",
          {
            strategy: "local",
            email: "hello@feathersjs.com",
            password: "supersecret",
          },
          function (error, authResult) {
            if (authResult.accessToken) {
              console.log(
                "Fireside [Socket] : accessToken successfully fetched from server",
                authResult.accessToken
              );
              saveLocalData("accessToken", authResult.accessToken);
              emit({ type: actions.SOCKET_CREATED });
            }

            // authResult will be {"accessToken": "your token", "user": user }
            // You can now send authenticated messages to the server
          }
        );
      }
    });

    // socket.on('messages created', eventHandler);
    socket.on("messages created", eventHandler);
    socket.on("error", errorHandler);

    socket.on("connect_failed", function () {
      console.log("Connection Failed");
    });

    const unsubscribe = () => {
      socket.off("message", eventHandler);
    };

    return unsubscribe;
  });
}

function* writeSocket(socket) {
  console.log("write socket enabled");
  while (true) {
    const {
      eventName,
      namespace,
      params,
      query,
      id,
      payload,
      user,
    } = yield take(actions.SOCKET_SEND);
    console.log("Writing to", eventName, namespace, params, query, id, payload);

    if (!payload) {
      console.log("fetching");
      socket.emit(eventName, namespace, params, query);
    } else {
      socket.emit(eventName, namespace, { text: payload, id: id, user: user });
    }

    //console.log("sent",'create', {text: payload});
  }
}

function* watchSocketChannel() {
  // Move this to open socket (w/ param auth)
  const socket = yield call(
    createSocketConnection,
    "http://3.129.52.188:3030",
    ""
  );

  // Search for Access Token
  console.log("Fireside [Socket] : Looking for local Access Token");
  yield put({ type: actions.GET_LOCAL_DATA, key: "accessToken" });

  // Add a timeout/ an or for get_local_data_unsuccessful
  const { data } = yield take(actions.GET_LOCAL_DATA_SUCCESSFUL);

  console.log("accessToken", data);
  let accessToken = null;

  console.log("at", accessToken);
  if (accessToken) {
    console.log("Fireside [Socket] : Attempting to save accessToken locally");
    yield put({
      type: actions.SAVE_LOCAL_DATA,
      key: "accessToken",
      data: authResult.accessToken,
    });
  }

  console.log("socket", socket);
  yield fork(writeSocket, socket); // I've added this line
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    try {
      const payload = yield take(socketChannel);

      // switch(payload.type){
      //   case 'SOCKET_CONNECTED':
      //   yield put({type: payload.type})
      // }

      if (payload.type == actions.SOCKET_CREATED) {
        yield put({ type: actions.SOCKET_CREATED });
        yield put({
          type: actions.SOCKET_SEND,
          isFetching: true,
          eventName: "find",
          namespace: "messages",
          params: 1,
          query: { fetch: "all" },
          payload: null,
        });
      } else {
        console.log("Message Received", payload);

        //Delete
        const cleanPayload = { id: payload.messageId, text: payload.text };

        yield put({
          type: actions.RECEIVED_MESSAGES,
          id: payload.messageId,
          text: payload.text,
          user: { name: payload.name },
        });
      }
    } catch (err) {
      console.log("socket error: ", err);
    }
  }
}

export { watchSocketChannel };
