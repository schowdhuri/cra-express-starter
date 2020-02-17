import { all } from "redux-saga/effects";

import getTodos from "./getTodos";
import saveTodo from "./saveTodo";

export default function* () {
  yield all([
    getTodos(),
    saveTodo()
  ]);
}
