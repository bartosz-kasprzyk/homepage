import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: getThemeFromLocalStorage(),
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectIsDarkMode = state => state.theme.theme;

export default themeSlice.reducer;