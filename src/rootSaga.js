import { all } from "redux-saga/effects";
import { themeSaga } from "./components/Header/Switch/themeSaga";

export default function* rootSaga() {
    yield all([
        themeSaga(),
    ]);
}