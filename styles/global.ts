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
        font-size: .8rem;
    }

    a, input, textarea {
        :focus {
        outline: 1px solid ${({ theme }) => theme.colors.secondary};
      }
    }
`;
