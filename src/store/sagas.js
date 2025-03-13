import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { setTabs } from "./tabsSlice";

/**
 * Saga to fetch tabs data from the server.
 *
 * This generator function makes an API call to fetch the tabs data from
 * the "/tabs.json" endpoint. If the call is successful, it dispatches
 * an action to set the tabs data in the store. If the call fails, it
 * logs an error message to the console.
 *
 * @generator
 * @yields {Object} The response from the API call.
 * @throws Will log an error message to the console if the API call fails.
 */
function* fetchTabs() {
  try {
    const response = yield call(axios.get, "/tabs.json");
    yield put(setTabs(response.data));
  } catch (error) {
    console.error("Failed to fetch tabs:", error);
  }
}

export function* rootSaga() {
  yield takeLatest("tabs/fetchTabs", fetchTabs);
}
