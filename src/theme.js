export const theme = {
    color: {
        white: {
            light: "#FFFFFF",
            dark: "#FBFBFE",
        },
        black: {
            light: "#363636B8",
            dark: "#252525",
        },
        violet: {
            one: "#090A3308",
            two: "#090A3305",
        },
        gray: "#E5E5E5",
        scienceBlue: "#0366D6",
        dodgerBlue: "#2188FF",
        lightBlue: "#4498F8",
        sail: "#ADD1FB",
        slateGray: "#6E7E91",
        iron: "#D1D5DA4D",
    },
    breakpoint: {
        tablet: "767px",
        phone: "480px",
    }
};

export const lightTheme = {
    ...theme,
    background: theme.color.white.dark,
    section: theme.color.white.light,
    header: theme.color.black.dark,
    text: theme.color.slateGray,
    projectHeader: theme.color.scienceBlue,
    accent: {
        light: theme.color.dodgerBlue,
        dark: theme.color.scienceBlue,
    },
    icon: theme.color.black.dark,
    loading: theme.color.iron,
    highlight: theme.color.sail,
    switch: {
        iconColor: theme.color.white.light,
        iconBackground: theme.color.slateGray,
        buttonBackground: theme.color.gray,
    }
};

export const darkTheme = {
    ...theme,
    background: theme.color.black.dark,
    section: theme.color.black.light,
    header: theme.color.white.light,
    text: theme.color.white.light,
    projectHeader: theme.color.white.light,
    accent: {
        light: theme.color.lightBlue,
        dark: theme.color.dodgerBlue,
    },
    icon: theme.color.white.light,
    loading: theme.color.black.light,
    highlight: theme.color.lightBlue,
    switch: {
        iconColor: theme.color.black.dark,
        iconBackground: theme.color.white.light,
        buttonBackground: theme.color.iron,
    }
};