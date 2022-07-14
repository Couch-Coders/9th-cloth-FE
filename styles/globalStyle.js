import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`    
    html, body, #__next {
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    body {
        background: #fbfcff;
    }
    p {
        margin: 0;
    }
    input, button {
        padding: 0;
        outline: none;
    }  
    button {
        cursor: pointer;
    }
`;
