import { combineReducers } from "redux";
import { takeEvery, takeLatest, take, fork, call, spawn } from "redux-saga/effects";

import { openSocket, readSocket, writeSocket } from "../sagas/SocketSagas";

import * as actions from "../../redux/constants/ActionTypes";

export function* watchSocket() {
  // Don't do anything until a CREATE_SOCKET event is retrieved
  yield take(actions.CREATE_SOCKET);
  yield fork(openSocket)
  
  // Wait for SOCKET_CREATED action to spawn read & write sagas
  const { socket } = yield take(actions.SOCKET_CREATED);
  
  // Spawn two sagas for read & write
  // Maybe change this to fork, I need to read more
  yield spawn(readSocket, socket)
  yield spawn(writeSocket, socket); 
}


