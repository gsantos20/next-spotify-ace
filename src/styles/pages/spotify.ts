/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createGlobalStyle } from 'styled-components'

export interface SpotifyProps {}

export const GlobalSpotifyStyle = createGlobalStyle`
  body {
    background-color: white;
  }

  .form-control-borderless {
    border: none;
  }

  .form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
`
