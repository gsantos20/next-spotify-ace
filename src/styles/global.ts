/* eslint-disable @typescript-eslint/no-unused-vars */

import { createGlobalStyle } from 'styled-components'
import { Poppins } from '@next/font/google'

export default createGlobalStyle`

  :root {
    --headerTOPMENU-height: 3rem;

    /*===== Colores =====*/
    --first-color: #462121;
    --dark-color: #070D1F;
    --dark-color-alt: #282B3A;
    --white-color: #E6E7E9;

    /*===== Fuente y tipografia =====*/
    --body-font: 'Poppins', sans-serif;
    --normal-font-size: .938rem;
    --small-font-size: .813rem;

    /*===== z index =====*/
    --z-fixed: 100;

    @media screen and (min-width: 768px) {
      :root {
        --normal-font-size: 1rem;
        --small-font-size: .875rem;
      }
  }

  /*===== BASE =====*/
  *, ::before, ::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    margin: 0;
  }

  body {
    /* margin: var(--headerTOPMENU-height) 0 0 0; */
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    font-weight: 500;
    width: 100vw;
    height: 100vh;
    margin: 0;
    overflow: hidden;
  }

  #__next {
    position: absolute;
    inset: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
