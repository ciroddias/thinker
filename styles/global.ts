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
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
    }

    div {
        border-radius: 5px;
    }

    time {
        font-size: .8rem;
    }

    a {
        cursor: pointer;
        font-size: .8rem;
    }

    input {
        border: none;
        background-color: ${({ theme }) => theme.colors["card-200"]};
        padding: 1rem;
        border-radius: ${({ theme }) => theme.borderRadius};
        color: ${({ theme }) => theme.colors["text-100"]};
    }

    button {
        display: block;
        border: none;
        border-radius: ${({ theme }) => theme.borderRadius};
        padding: 1rem 2rem;
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors["text-100"]};
    }

    a, input, textarea {
        :focus {
        outline: 1px solid ${({ theme }) => theme.colors.secondary};
      }
    }
`;
