import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 15px;
        line-height: 1.5;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        transition: background 0.3s;
        background: ${({ theme }) => theme.background};
        font-family: 'Inter', sans-serif;
    }
`;