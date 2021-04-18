import { all } from "redux-saga/effects";
import { musicDataSaga } from "./musicData";

export default function* rootSaga() {
  yield all([musicDataSaga()]);
}
