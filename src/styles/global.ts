import { createGlobalStyle } from 'styled-components'
import BgImage from '../assets/bg-stars.svg'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button, text-area {
        font-family: 'Red Hat Text', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }

    body {
        background-color: var(--veryDarkBlue);
        background-image: url(${BgImage});
    }

    :root {
        --grayishBlue: hsl(237, 18%, 59%);
        --softRed: hsl(345, 95%, 68%);
        --white: hsl(0, 0%, 100%);
        --darkDesaturatedBlue: hsl(236, 21%, 26%);
        --veryDarkBlue: hsl(235, 16%, 14%);
        --darkBlue: hsl(234, 17%, 12%);
        --green-100: #90c290;
        --green-200: #688b58;
    }
`