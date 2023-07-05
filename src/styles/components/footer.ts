/* eslint @typescript-eslint/no-empty-interface: "off" */

import styled, { createGlobalStyle } from 'styled-components'

export interface FooterProps {}

export const GlobalFooterStyle = createGlobalStyle`
`

export const TagFooter = styled.footer`
  background-color: #360000;
  color: #fff;
  height: 3.5rem;
  border: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`

export const FooterLink = styled.a`
  -webkit-transition: font-size 0.6s ease;
  -moz-transition: font-size 0.6s ease;
  -o-transition: font-size 0.6 ease;
  transition: font-size 0.6 ease;
  color: lightgrey;
  text-decoration: none;

  &:hover {
    transition: all 0.4s ease;
    transform: scale(1.2);
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
    color: white;
  }
`
