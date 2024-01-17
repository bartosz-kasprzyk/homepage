export const theme = {
    color: {
        white: {
            light: "#FFFFFF",
            dark: "#FBFBFE",
        },
        black: {
            light: "#090A3308",
            dark: "#252525",
        },
        violet: {
            one: "#090A3308",
            two: "#090A3305",
        },
        gray: "#E5E5E5",
        scienceBlue: "#0366D6",
        dodgerBlue: "#2188FF",
        slateGray: "#6E7E91",
        iron: "#D1D5DA4D",
    },
    breakpoint: {
        mobile: "767px",
    }
};

export const themeLight = {
    ...theme,
    background: theme.color.white.dark,
    section: theme.color.white.light,
    header: theme.color.black.dark,
    text: theme.color.slateGray,
    projectHeader: theme.color.black.dark,
    accent: theme.color.scienceBlue,
    icon: theme.color.black.dark,
    loading: theme.color.iron,
    mode: {
        color: theme.color.white.light,
        background: theme.color.slateGray,
        button: theme.color.gray,
    }
};

export const themeDark = {
    ...theme,
    background: theme.color.black.dark,
    section: theme.color.black.light,
    header: theme.color.white.light,
    text: theme.color.white.light,
    projectHeader: theme.color.white.light,
    accent: theme.color.white.light,
    icon: theme.color.white.light,
    loading: theme.color.slateGray,
    mode: {
        color: theme.color.black.dark,
        background: theme.color.white.light,
        button: theme.color.black.dark,
    }
};