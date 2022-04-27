import { createGlobalStyle } from 'styled-components'

import * as Color from './constants/colors'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: Roboto, sans-serif;
        color: ${Color.primary}
    }
`