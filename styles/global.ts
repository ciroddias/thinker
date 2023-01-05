import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors["background-100"]};
        color: ${({ theme }) => theme.colors["text-100"]};
        font-family: 'Raleway', sans-serif;
    }

    div {
        border-radius: 5px;
    }
`;
