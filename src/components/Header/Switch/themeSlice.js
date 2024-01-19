import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: getThemeFromLocalStorage(),
        isDarkMode: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

const selectThemeState = state => state.theme;

export const selectIsDarkMode = state => selectThemeState(state).theme;

export default themeSlice.reducer;