// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import newsReducer from "./reducer";
import watchFetchNews from "./saga";

const rootReducer = combineReducers({
  news: newsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchNews);

export default store;
