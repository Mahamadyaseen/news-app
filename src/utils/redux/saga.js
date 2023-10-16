// newsSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import { fetchNewsData } from "./reducer";
import { fetchNewsapi } from "../axios";

function* fetchNewsSaga() {
  try {
    const data = yield call(fetchNewsapi);
    yield put(fetchNewsData(data.articles));
    console.log(data);
  } catch (error) {
    // Handle errors
    console.log("error", error);
  }
}

function* watchFetchNews() {
  yield takeLatest("FETCH_NEWS", fetchNewsSaga);
}

export default watchFetchNews;
