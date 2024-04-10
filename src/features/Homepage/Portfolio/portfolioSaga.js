import { takeEvery, call, select } from "redux-saga/effects";
import { selectIsDarkMode } from "./themeSlice";
import { saveThemeInLocalStorage } from "./themeLocalStorage";

function* saveThemeInLocalStorageHandler() {
    const theme = yield select(selectIsDarkMode);
    yield call(saveThemeInLocalStorage, theme);
}

export function* themeSaga() {
    yield takeEvery("*", saveThemeInLocalStorageHandler);
}