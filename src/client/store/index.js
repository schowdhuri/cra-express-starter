import { createStore, applyMiddleware, compose } from "redux";

export default function configureStore(reducer, sagaMiddleware, routerMiddleware) {
  let rdt = process.env.REACT_APP_TARGET_ENV === "prod"
    ? window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
    : f => f;
  const store = createStore(reducer, {}, compose(
    applyMiddleware(routerMiddleware, sagaMiddleware),
    rdt
  ));
  return store;
}
